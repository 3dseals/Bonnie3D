export default String('\n\
struct PhysicalMaterial {\n\
\n\
	vec3	diffuseColor;\n\
	float	specularRoughness;\n\
	vec3	specularColor;\n\
\n\
	#ifndef STANDARD\n\
		float clearCoat;\n\
		float clearCoatRoughness;\n\
	#endif\n\
\n\
};\n\
\n\
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n\
#define DEFAULT_SPECULAR_COEFFICIENT 0.04\n\
\n\
// Clear coat directional hemishperical reflectance (this approximation should be improved)\n\
float clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\
\n\
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n\
\n\
}\n\
\n\
#if NUM_RECT_AREA_LIGHTS > 0\n\
\n\
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\
\n\
		vec3 normal = geometry.normal;\n\
		vec3 viewDir = geometry.viewDir;\n\
		vec3 position = geometry.position;\n\
		vec3 lightPos = rectAreaLight.position;\n\
		vec3 halfWidth = rectAreaLight.halfWidth;\n\
		vec3 halfHeight = rectAreaLight.halfHeight;\n\
		vec3 lightColor = rectAreaLight.color;\n\
		float roughness = material.specularRoughness;\n\
\n\
		vec3 rectCoords[ 4 ];\n\
		rectCoords[ 0 ] = lightPos - halfWidth - halfHeight; // counterclockwise\n\
		rectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\
		rectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\
		rectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\
\n\
		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n\
\n\
		float norm = texture2D( ltcMag, uv ).a;\n\
\n\
		vec4 t = texture2D( ltcMat, uv );\n\
\n\
		mat3 mInv = mat3(\n\
			vec3(   1,   0, t.y ),\n\
			vec3(   0, t.z,   0 ),\n\
			vec3( t.w,   0, t.x )\n\
		);\n\
\n\
		reflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords ); // no fresnel\n\
\n\
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\
\n\
	}\n\
\n\
#endif\n\
\n\
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\
\n\
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\
\n\
	vec3 irradiance = dotNL * directLight.color;\n\
\n\
	#ifndef PHYSICALLY_CORRECT_LIGHTS\n\
\n\
		irradiance *= PI; // punctual light\n\
\n\
	#endif\n\
\n\
	#ifndef STANDARD\n\
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\
	#else\n\
		float clearCoatDHR = 0.0;\n\
	#endif\n\
\n\
	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\
\n\
	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\
\n\
	#ifndef STANDARD\n\
\n\
		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\
\n\
	#endif\n\
\n\
}\n\
\n\
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\
\n\
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\
\n\
}\n\
\n\
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\
\n\
	#ifndef STANDARD\n\
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\
		float dotNL = dotNV;\n\
		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\
	#else\n\
		float clearCoatDHR = 0.0;\n\
	#endif\n\
\n\
	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\
\n\
	#ifndef STANDARD\n\
\n\
		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\
\n\
	#endif\n\
\n\
}\n\
\n\
#define RE_Direct				RE_Direct_Physical\n\
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n\
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n\
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n\
\n\
#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n\
#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\n\
\n\
// ref: http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\n\
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\
\n\
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );