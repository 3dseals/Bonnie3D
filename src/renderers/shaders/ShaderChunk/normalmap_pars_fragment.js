export default String('\n\
#ifdef USE_NORMALMAP\n\
\n\
	uniform sampler2D normalMap;\n\
	uniform vec2 normalScale;\n\
\n\
	// Per-Pixel Tangent Space Normal Mapping\n\
	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\
\n\
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\
\n\
		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\
\n\
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\
		vec2 st0 = dFdx( vUv.st );\n\
		vec2 st1 = dFdy( vUv.st );\n\
\n\
		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\
		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\
		vec3 N = normalize( surf_norm );\n\
\n\
		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\
		mapN.xy = normalScale * mapN.xy;\n\
		mat3 tsn = mat3( S, T, N );\n\
		return normalize( tsn * mapN );\n\
\n\
	}\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );