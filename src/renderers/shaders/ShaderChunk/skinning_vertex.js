export default String('\n\
#ifdef USE_SKINNING\n\
\n\
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\
\n\
	vec4 skinned = vec4( 0.0 );\n\
	skinned += boneMatX * skinVertex * skinWeight.x;\n\
	skinned += boneMatY * skinVertex * skinWeight.y;\n\
	skinned += boneMatZ * skinVertex * skinWeight.z;\n\
	skinned += boneMatW * skinVertex * skinWeight.w;\n\
	skinned  = bindMatrixInverse * skinned;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );