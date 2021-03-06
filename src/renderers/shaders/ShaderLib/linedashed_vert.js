export default String('\n\
uniform float scale;\n\
attribute float lineDistance;\n\
\n\
varying float vLineDistance;\n\
\n\
#include <common>\n\
#include <color_pars_vertex>\n\
#include <fog_pars_vertex>\n\
#include <logdepthbuf_pars_vertex>\n\
#include <clipping_planes_pars_vertex>\n\
\n\
void main() {\n\
\n\
	#include <color_vertex>\n\
\n\
	vLineDistance = scale * lineDistance;\n\
\n\
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\
	gl_Position = projectionMatrix * mvPosition;\n\
\n\
	#include <logdepthbuf_vertex>\n\
	#include <clipping_planes_vertex>\n\
	#include <fog_vertex>\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );