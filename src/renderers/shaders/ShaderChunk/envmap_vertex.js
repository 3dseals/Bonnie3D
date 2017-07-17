export default String('\n\
#ifdef USE_ENVMAP\n\
\n\
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\
\n\
		vWorldPosition = worldPosition.xyz;\n\
\n\
	#else\n\
\n\
		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\
\n\
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\
\n\
		#ifdef ENVMAP_MODE_REFLECTION\n\
\n\
			vReflect = reflect( cameraToVertex, worldNormal );\n\
\n\
		#else\n\
\n\
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\
\n\
		#endif\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );