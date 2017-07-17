export default String('\n\
#if defined( TONE_MAPPING )\n\
\n\
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );