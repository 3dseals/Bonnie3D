export default String('\n\
#define PHONG\n\
\n\
varying vec3 vViewPosition;\n\
\n\
#ifndef FLAT_SHADED\n\
\n\
	varying vec3 vNormal;\n\
\n\
#endif\n\
\n\
#include <common>\n\
#include <uv_pars_vertex>\n\
#include <uv2_pars_vertex>\n\
#include <displacementmap_pars_vertex>\n\
#include <envmap_pars_vertex>\n\
#include <color_pars_vertex>\n\
#include <fog_pars_vertex>\n\
#include <morphtarget_pars_vertex>\n\
#include <skinning_pars_vertex>\n\
#include <shadowmap_pars_vertex>\n\
#include <logdepthbuf_pars_vertex>\n\
#include <clipping_planes_pars_vertex>\n\
\n\
void main() {\n\
\n\
	#include <uv_vertex>\n\
	#include <uv2_vertex>\n\
	#include <color_vertex>\n\
\n\
	#include <beginnormal_vertex>\n\
	#include <morphnormal_vertex>\n\
	#include <skinbase_vertex>\n\
	#include <skinnormal_vertex>\n\
	#include <defaultnormal_vertex>\n\
\n\
#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\
\n\
	vNormal = normalize( transformedNormal );\n\
\n\
#endif\n\
\n\
	#include <begin_vertex>\n\
	#include <displacementmap_vertex>\n\
	#include <morphtarget_vertex>\n\
	#include <skinning_vertex>\n\
	#include <project_vertex>\n\
	#include <logdepthbuf_vertex>\n\
	#include <clipping_planes_vertex>\n\
\n\
	vViewPosition = - mvPosition.xyz;\n\
\n\
	#include <worldpos_vertex>\n\
	#include <envmap_vertex>\n\
	#include <shadowmap_vertex>\n\
	#include <fog_vertex>\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );