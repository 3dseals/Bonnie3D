export default String('\n\
#ifdef USE_EMISSIVEMAP\n\
\n\
	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n\
\n\
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\
\n\
	totalEmissiveRadiance *= emissiveColor.rgb;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );