export default String('\n\
#define NORMAL\n\
\n\
uniform float opacity;\n\
\n\
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\
\n\
	varying vec3 vViewPosition;\n\
\n\
#endif\n\
\n\
#ifndef FLAT_SHADED\n\
\n\
	varying vec3 vNormal;\n\
\n\
#endif\n\
\n\
#include <packing>\n\
#include <uv_pars_fragment>\n\
#include <bumpmap_pars_fragment>\n\
#include <normalmap_pars_fragment>\n\
#include <logdepthbuf_pars_fragment>\n\
\n\
void main() {\n\
\n\
	#include <logdepthbuf_fragment>\n\
	#include <normal_flip>\n\
	#include <normal_fragment>\n\
\n\
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );