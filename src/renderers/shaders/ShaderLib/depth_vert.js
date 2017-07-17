export default String('\n\
#include <common>\n\
#include <uv_pars_vertex>\n\
#include <displacementmap_pars_vertex>\n\
#include <morphtarget_pars_vertex>\n\
#include <skinning_pars_vertex>\n\
#include <logdepthbuf_pars_vertex>\n\
#include <clipping_planes_pars_vertex>\n\
\n\
void main() {\n\
\n\
	#include <uv_vertex>\n\
\n\
	#include <skinbase_vertex>\n\
\n\
	#include <begin_vertex>\n\
	#include <displacementmap_vertex>\n\
	#include <morphtarget_vertex>\n\
	#include <skinning_vertex>\n\
	#include <project_vertex>\n\
	#include <logdepthbuf_vertex>\n\
	#include <clipping_planes_vertex>\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );