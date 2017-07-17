export default String('\n\
#ifdef USE_FOG\n\
fogDepth = -mvPosition.z;\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );