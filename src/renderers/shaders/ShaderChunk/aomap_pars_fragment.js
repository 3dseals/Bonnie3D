export default String('\n\
#ifdef USE_AOMAP\n\
\n\
	uniform sampler2D aoMap;\n\
	uniform float aoMapIntensity;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );