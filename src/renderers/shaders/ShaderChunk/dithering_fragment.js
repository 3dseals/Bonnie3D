export default String('\n\
#if defined( DITHERING )\n\
\n\
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );