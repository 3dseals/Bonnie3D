export default String('\n\
varying vec3 vWorldPosition;\n\
\n\
#include <common>\n\
\n\
void main() {\n\
\n\
	vWorldPosition = transformDirection( position, modelMatrix );\n\
\n\
	#include <begin_vertex>\n\
	#include <project_vertex>\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );