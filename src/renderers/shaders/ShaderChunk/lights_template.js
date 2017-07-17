/**\n\
 * This is a template that can be used to light a material, it uses pluggable\n\
 * RenderEquations (RE)for specific lighting scenarios.\n\
 *\n\
 * Instructions for use:\n\
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n\
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n\
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n\
 *\n\
 * TODO:\n\
 * - Add area light support.\n\
 * - Add sphere light support.\n\
 * - Add diffuse light probe (irradiance cubemap) support.\n\
 */
export default String('\n\
GeometricContext geometry;\n\
\n\
geometry.position = - vViewPosition;\n\
geometry.normal = normal;\n\
geometry.viewDir = normalize( vViewPosition );\n\
\n\
IncidentLight directLight;\n\
\n\
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\
\n\
	PointLight pointLight;\n\
\n\
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\
\n\
		pointLight = pointLights[ i ];\n\
\n\
		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n\
\n\
		#ifdef USE_SHADOWMAP\n\
		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\
		#endif\n\
\n\
		RE_Direct( directLight, geometry, material, reflectedLight );\n\
\n\
	}\n\
\n\
#endif\n\
\n\
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\
\n\
	SpotLight spotLight;\n\
\n\
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\
\n\
		spotLight = spotLights[ i ];\n\
\n\
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\
\n\
		#ifdef USE_SHADOWMAP\n\
		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\
		#endif\n\
\n\
		RE_Direct( directLight, geometry, material, reflectedLight );\n\
\n\
	}\n\
\n\
#endif\n\
\n\
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\
\n\
	DirectionalLight directionalLight;\n\
\n\
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\
\n\
		directionalLight = directionalLights[ i ];\n\
\n\
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\
\n\
		#ifdef USE_SHADOWMAP\n\
		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\
		#endif\n\
\n\
		RE_Direct( directLight, geometry, material, reflectedLight );\n\
\n\
	}\n\
\n\
#endif\n\
\n\
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\
\n\
	RectAreaLight rectAreaLight;\n\
\n\
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\
\n\
		rectAreaLight = rectAreaLights[ i ];\n\
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\
\n\
	}\n\
\n\
#endif\n\
\n\
#if defined( RE_IndirectDiffuse )\n\
\n\
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\
\n\
	#ifdef USE_LIGHTMAP\n\
\n\
		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\
\n\
		#ifndef PHYSICALLY_CORRECT_LIGHTS\n\
\n\
			lightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\n\
\n\
		#endif\n\
\n\
		irradiance += lightMapIrradiance;\n\
\n\
	#endif\n\
\n\
	#if ( NUM_HEMI_LIGHTS > 0 )\n\
\n\
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\
\n\
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\
\n\
		}\n\
\n\
	#endif\n\
\n\
	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\
\n\
		// TODO, replace 8 with the real maxMIPLevel\n\
		irradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, 8 );\n\
\n\
	#endif\n\
\n\
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\
\n\
#endif\n\
\n\
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\
\n\
	// TODO, replace 8 with the real maxMIPLevel\n\
	vec3 radiance = getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_BlinnShininessExponent( material ), 8 );\n\
\n\
	#ifndef STANDARD\n\
		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\
	#else\n\
		vec3 clearCoatRadiance = vec3( 0.0 );\n\
	#endif\n\
\n\
	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );