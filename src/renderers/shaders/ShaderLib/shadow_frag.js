export default String('\n\
uniform float opacity;\n\
\n\
#include <common>\n\
#include <packing>\n\
#include <bsdfs>\n\
#include <lights_pars>\n\
#include <shadowmap_pars_fragment>\n\
#include <shadowmask_pars_fragment>\n\
\n\
void main() {\n\
\n\
	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );