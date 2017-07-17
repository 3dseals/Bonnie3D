export default String('\n\
float specularStrength;\n\
\n\
#ifdef USE_SPECULARMAP\n\
\n\
	vec4 texelSpecular = texture2D( specularMap, vUv );\n\
	specularStrength = texelSpecular.r;\n\
\n\
#else\n\
\n\
	specularStrength = 1.0;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );