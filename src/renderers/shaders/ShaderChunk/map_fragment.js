export default String('\n\
#ifdef USE_MAP\n\
\n\
	vec4 texelColor = texture2D( map, vUv );\n\
\n\
	texelColor = mapTexelToLinear( texelColor );\n\
	diffuseColor *= texelColor;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );