export default String('\n\
varying vec4 vWorldPosition;\n\
\n\
#include <common>\n\
#include <morphtarget_pars_vertex>\n\
#include <skinning_pars_vertex>\n\
#include <clipping_planes_pars_vertex>\n\
\n\
void main() {\n\
\n\
	#include <skinbase_vertex>\n\
	#include <begin_vertex>\n\
	#include <morphtarget_vertex>\n\
	#include <skinning_vertex>\n\
	#include <project_vertex>\n\
	#include <worldpos_vertex>\n\
	#include <clipping_planes_vertex>\n\
\n\
	vWorldPosition = worldPosition;\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );