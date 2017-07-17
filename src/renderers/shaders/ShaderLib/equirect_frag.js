export default String('\n\
uniform sampler2D tEquirect;\n\
uniform float tFlip;\n\
\n\
varying vec3 vWorldPosition;\n\
\n\
#include <common>\n\
\n\
void main() {\n\
\n\
	// 	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\
	vec3 direction = normalize( vWorldPosition );\n\
	vec2 sampleUV;\n\
	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\
	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\
	gl_FragColor = texture2D( tEquirect, sampleUV );\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );