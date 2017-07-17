export default String('\n\
uniform vec3 lightPos;\n\
varying vec4 vWorldPosition;\n\
\n\
#include <common>\n\
#include <packing>\n\
#include <clipping_planes_pars_fragment>\n\
\n\
void main () {\n\
\n\
	#include <clipping_planes_fragment>\n\
\n\
	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );