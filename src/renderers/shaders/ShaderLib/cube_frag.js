export default String('\n\
uniform samplerCube tCube;\n\
uniform float tFlip;\n\
uniform float opacity;\n\
\n\
varying vec3 vWorldPosition;\n\
\n\
#include <common>\n\
\n\
void main() {\n\
\n\
	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\
	gl_FragColor.a *= opacity;\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );