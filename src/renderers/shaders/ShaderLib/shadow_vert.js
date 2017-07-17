export default String('\n\
#include <shadowmap_pars_vertex>\n\
\n\
void main() {\n\
\n\
	#include <begin_vertex>\n\
	#include <project_vertex>\n\
	#include <worldpos_vertex>\n\
	#include <shadowmap_vertex>\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );