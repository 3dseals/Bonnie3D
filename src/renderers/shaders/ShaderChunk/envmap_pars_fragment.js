export default String('\n\
#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\
	uniform float reflectivity;\n\
	uniform float envMapIntensity;\n\
#endif\n\
\n\
#ifdef USE_ENVMAP\n\
\n\
	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\
		varying vec3 vWorldPosition;\n\
	#endif\n\
\n\
	#ifdef ENVMAP_TYPE_CUBE\n\
		uniform samplerCube envMap;\n\
	#else\n\
		uniform sampler2D envMap;\n\
	#endif\n\
	uniform float flipEnvMap;\n\
\n\
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\
		uniform float refractionRatio;\n\
	#else\n\
		varying vec3 vReflect;\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );