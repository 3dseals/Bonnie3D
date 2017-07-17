export default String('\n\
#ifdef USE_SHADOWMAP\n\
\n\
	#if NUM_DIR_LIGHTS > 0\n\
\n\
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\
\n\
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\
\n\
	}\n\
\n\
	#endif\n\
\n\
	#if NUM_SPOT_LIGHTS > 0\n\
\n\
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\
\n\
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\
\n\
	}\n\
\n\
	#endif\n\
\n\
	#if NUM_POINT_LIGHTS > 0\n\
\n\
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\
\n\
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\
\n\
	}\n\
\n\
	#endif\n\
\n\
	/*\n\
	#if NUM_RECT_AREA_LIGHTS > 0\n\
\n\
		// TODO (abelnation): update vAreaShadowCoord with area light info\n\
\n\
	#endif\n\
	*/\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );