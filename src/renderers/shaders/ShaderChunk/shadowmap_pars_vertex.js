export default String('\n\
#ifdef USE_SHADOWMAP\n\
\n\
	#if NUM_DIR_LIGHTS > 0\n\
\n\
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\
\n\
	#endif\n\
\n\
	#if NUM_SPOT_LIGHTS > 0\n\
\n\
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\
\n\
	#endif\n\
\n\
	#if NUM_POINT_LIGHTS > 0\n\
\n\
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\
\n\
	#endif\n\
\n\
	/*\n\
	#if NUM_RECT_AREA_LIGHTS > 0\n\
\n\
		// TODO (abelnation): uniforms for area light shadows\n\
\n\
	#endif\n\
	*/\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );