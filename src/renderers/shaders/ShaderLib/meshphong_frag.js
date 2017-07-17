export default String('\n\
#define PHONG\n\
\n\
uniform vec3 diffuse;\n\
uniform vec3 emissive;\n\
uniform vec3 specular;\n\
uniform float shininess;\n\
uniform float opacity;\n\
\n\
#include <common>\n\
#include <packing>\n\
#include <dithering_pars_fragment>\n\
#include <color_pars_fragment>\n\
#include <uv_pars_fragment>\n\
#include <uv2_pars_fragment>\n\
#include <map_pars_fragment>\n\
#include <alphamap_pars_fragment>\n\
#include <aomap_pars_fragment>\n\
#include <lightmap_pars_fragment>\n\
#include <emissivemap_pars_fragment>\n\
#include <envmap_pars_fragment>\n\
#include <gradientmap_pars_fragment>\n\
#include <fog_pars_fragment>\n\
#include <bsdfs>\n\
#include <lights_pars>\n\
#include <lights_phong_pars_fragment>\n\
#include <shadowmap_pars_fragment>\n\
#include <bumpmap_pars_fragment>\n\
#include <normalmap_pars_fragment>\n\
#include <specularmap_pars_fragment>\n\
#include <logdepthbuf_pars_fragment>\n\
#include <clipping_planes_pars_fragment>\n\
\n\
void main() {\n\
\n\
	#include <clipping_planes_fragment>\n\
\n\
	vec4 diffuseColor = vec4( diffuse, opacity );\n\
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\
	vec3 totalEmissiveRadiance = emissive;\n\
\n\
	#include <logdepthbuf_fragment>\n\
	#include <map_fragment>\n\
	#include <color_fragment>\n\
	#include <alphamap_fragment>\n\
	#include <alphatest_fragment>\n\
	#include <specularmap_fragment>\n\
	#include <normal_flip>\n\
	#include <normal_fragment>\n\
	#include <emissivemap_fragment>\n\
\n\
	// accumulation\n\
	#include <lights_phong_fragment>\n\
	#include <lights_template>\n\
\n\
	// modulation\n\
	#include <aomap_fragment>\n\
\n\
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\
\n\
	#include <envmap_fragment>\n\
\n\
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\
\n\
	#include <tonemapping_fragment>\n\
	#include <encodings_fragment>\n\
	#include <fog_fragment>\n\
	#include <premultiplied_alpha_fragment>\n\
	#include <dithering_fragment>\n\
\n\
}\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );