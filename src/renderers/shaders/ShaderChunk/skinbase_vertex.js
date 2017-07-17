export default String('\n\
#ifdef USE_SKINNING\n\
\n\
	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n\
	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n\
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\
	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );