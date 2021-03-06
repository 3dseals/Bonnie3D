export default String('\n\
uniform vec3 ambientLightColor;\n\
\n\
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\
\n\
	vec3 irradiance = ambientLightColor;\n\
\n\
	#ifndef PHYSICALLY_CORRECT_LIGHTS\n\
\n\
		irradiance *= PI;\n\
\n\
	#endif\n\
\n\
	return irradiance;\n\
\n\
}\n\
\n\
#if NUM_DIR_LIGHTS > 0\n\
\n\
	struct DirectionalLight {\n\
		vec3 direction;\n\
		vec3 color;\n\
\n\
		int shadow;\n\
		float shadowBias;\n\
		float shadowRadius;\n\
		vec2 shadowMapSize;\n\
	};\n\
\n\
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\
\n\
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\
\n\
		directLight.color = directionalLight.color;\n\
		directLight.direction = directionalLight.direction;\n\
		directLight.visible = true;\n\
\n\
	}\n\
\n\
#endif\n\
\n\
\n\
#if NUM_POINT_LIGHTS > 0\n\
\n\
	struct PointLight {\n\
		vec3 position;\n\
		vec3 color;\n\
		float distance;\n\
		float decay;\n\
\n\
		int shadow;\n\
		float shadowBias;\n\
		float shadowRadius;\n\
		vec2 shadowMapSize;\n\
	};\n\
\n\
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\
\n\
	// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\
\n\
		vec3 lVector = pointLight.position - geometry.position;\n\
		directLight.direction = normalize( lVector );\n\
\n\
		float lightDistance = length( lVector );\n\
\n\
		directLight.color = pointLight.color;\n\
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\
		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n\
\n\
	}\n\
\n\
#endif\n\
\n\
\n\
#if NUM_SPOT_LIGHTS > 0\n\
\n\
	struct SpotLight {\n\
		vec3 position;\n\
		vec3 direction;\n\
		vec3 color;\n\
		float distance;\n\
		float decay;\n\
		float coneCos;\n\
		float penumbraCos;\n\
\n\
		int shadow;\n\
		float shadowBias;\n\
		float shadowRadius;\n\
		vec2 shadowMapSize;\n\
	};\n\
\n\
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\
\n\
	// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\
\n\
		vec3 lVector = spotLight.position - geometry.position;\n\
		directLight.direction = normalize( lVector );\n\
\n\
		float lightDistance = length( lVector );\n\
		float angleCos = dot( directLight.direction, spotLight.direction );\n\
\n\
		if ( angleCos > spotLight.coneCos ) {\n\
\n\
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\
\n\
			directLight.color = spotLight.color;\n\
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\
			directLight.visible = true;\n\
\n\
		} else {\n\
\n\
			directLight.color = vec3( 0.0 );\n\
			directLight.visible = false;\n\
\n\
		}\n\
	}\n\
\n\
#endif\n\
\n\
\n\
#if NUM_RECT_AREA_LIGHTS > 0\n\
\n\
	struct RectAreaLight {\n\
		vec3 color;\n\
		vec3 position;\n\
		vec3 halfWidth;\n\
		vec3 halfHeight;\n\
	};\n\
\n\
	// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\
	// BRDF approximation Texture is 64x64\n\
	uniform sampler2D ltcMat; // RGBA Float\n\
	uniform sampler2D ltcMag; // Alpha Float (only has w component)\n\
\n\
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\
\n\
#endif\n\
\n\
\n\
#if NUM_HEMI_LIGHTS > 0\n\
\n\
	struct HemisphereLight {\n\
		vec3 direction;\n\
		vec3 skyColor;\n\
		vec3 groundColor;\n\
	};\n\
\n\
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\
\n\
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\
\n\
		float dotNL = dot( geometry.normal, hemiLight.direction );\n\
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\
\n\
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\
\n\
		#ifndef PHYSICALLY_CORRECT_LIGHTS\n\
\n\
			irradiance *= PI;\n\
\n\
		#endif\n\
\n\
		return irradiance;\n\
\n\
	}\n\
\n\
#endif\n\
\n\
\n\
#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\
\n\
	vec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {\n\
\n\
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\
\n\
		#ifdef ENVMAP_TYPE_CUBE\n\
\n\
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\
\n\
			// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level\n\
			// of a specular cubemap, or just the default level of a specially created irradiance cubemap.\n\
\n\
			#ifdef TEXTURE_LOD_EXT\n\
\n\
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\
\n\
			#else\n\
\n\
				// force the bias high to get the last LOD level as it is the most blurred.\n\
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\
\n\
			#endif\n\
\n\
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\
\n\
		#elif defined( ENVMAP_TYPE_CUBE_UV )\n\
\n\
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\
			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\
\n\
		#else\n\
\n\
			vec4 envMapColor = vec4( 0.0 );\n\
\n\
		#endif\n\
\n\
		return PI * envMapColor.rgb * envMapIntensity;\n\
\n\
	}\n\
\n\
	// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html\n\
	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\
\n\
		//float envMapWidth = pow( 2.0, maxMIPLevelScalar );\n\
		//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\
\n\
		float maxMIPLevelScalar = float( maxMIPLevel );\n\
		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\
\n\
		// clamp to allowable LOD ranges.\n\
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\
\n\
	}\n\
\n\
	vec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\
\n\
		#ifdef ENVMAP_MODE_REFLECTION\n\
\n\
			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\
\n\
		#else\n\
\n\
			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\
\n\
		#endif\n\
\n\
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\
\n\
		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\
\n\
		#ifdef ENVMAP_TYPE_CUBE\n\
\n\
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\
\n\
			#ifdef TEXTURE_LOD_EXT\n\
\n\
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\
\n\
			#else\n\
\n\
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\
\n\
			#endif\n\
\n\
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\
\n\
		#elif defined( ENVMAP_TYPE_CUBE_UV )\n\
\n\
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\
			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\
\n\
		#elif defined( ENVMAP_TYPE_EQUIREC )\n\
\n\
			vec2 sampleUV;\n\
			sampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\
			sampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\
\n\
			#ifdef TEXTURE_LOD_EXT\n\
\n\
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\
\n\
			#else\n\
\n\
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\
\n\
			#endif\n\
\n\
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\
\n\
		#elif defined( ENVMAP_TYPE_SPHERE )\n\
\n\
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\
\n\
			#ifdef TEXTURE_LOD_EXT\n\
\n\
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\
\n\
			#else\n\
\n\
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\
\n\
			#endif\n\
\n\
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\
\n\
		#endif\n\
\n\
		return envMapColor.rgb * envMapIntensity;\n\
\n\
	}\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );