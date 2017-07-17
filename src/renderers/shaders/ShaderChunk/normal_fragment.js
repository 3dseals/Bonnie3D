export default String('\n\
#ifdef FLAT_SHADED\n\
\n\
	// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...\n\
\n\
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\
	vec3 normal = normalize( cross( fdx, fdy ) );\n\
\n\
#else\n\
\n\
	vec3 normal = normalize( vNormal ) * flipNormal;\n\
\n\
#endif\n\
\n\
#ifdef USE_NORMALMAP\n\
\n\
	normal = perturbNormal2Arb( -vViewPosition, normal );\n\
\n\
#elif defined( USE_BUMPMAP )\n\
\n\
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );