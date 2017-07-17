export default String('\n\
  gl_FragColor = linearToOutputTexel( gl_FragColor );\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );