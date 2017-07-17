export default String('\n\
BlinnPhongMaterial material;\n\
material.diffuseColor = diffuseColor.rgb;\n\
material.specularColor = specular;\n\
material.specularShininess = shininess;\n\
material.specularStrength = specularStrength;\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );