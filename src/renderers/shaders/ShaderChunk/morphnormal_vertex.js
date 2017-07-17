export default String('\n\
#ifdef USE_MORPHNORMALS\n\
\n\
	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\
	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\
	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\
	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );