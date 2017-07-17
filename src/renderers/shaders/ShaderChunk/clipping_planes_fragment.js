export default String('\n\
#if NUM_CLIPPING_PLANES > 0\n\
\n\
	for ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\
\n\
		vec4 plane = clippingPlanes[ i ];\n\
		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\
\n\
	}\n\
		\n\
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\
\n\
		bool clipped = true;\n\
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\
			vec4 plane = clippingPlanes[ i ];\n\
			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\
		}\n\
\n\
		if ( clipped ) discard;\n\
	\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );