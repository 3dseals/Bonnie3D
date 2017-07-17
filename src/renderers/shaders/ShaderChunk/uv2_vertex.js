export default String('\n\
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\
\n\
	vUv2 = uv2;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );