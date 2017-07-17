export default String('\n\
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\
\n\
	varying vec2 vUv2;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );