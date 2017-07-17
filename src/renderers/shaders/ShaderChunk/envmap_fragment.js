export default String('\n\
#ifdef USE_ENVMAP\n\
\n\
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\
\n\
		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\
\n\
		// Transforming Normal Vectors with the Inverse Transformation\n\
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\
\n\
		#ifdef ENVMAP_MODE_REFLECTION\n\
\n\
			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\
\n\
		#else\n\
\n\
			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\
\n\
		#endif\n\
\n\
	#else\n\
\n\
		vec3 reflectVec = vReflect;\n\
\n\
	#endif\n\
\n\
	#ifdef ENVMAP_TYPE_CUBE\n\
\n\
		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\
\n\
	#elif defined( ENVMAP_TYPE_EQUIREC )\n\
\n\
		vec2 sampleUV;\n\
		sampleUV.y = asin( flipNormal * reflectVec.y ) * RECIPROCAL_PI + 0.5;\n\
		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\
		vec4 envColor = texture2D( envMap, sampleUV );\n\
\n\
	#elif defined( ENVMAP_TYPE_SPHERE )\n\
\n\
		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\
\n\
	#else\n\
\n\
		vec4 envColor = vec4( 0.0 );\n\
\n\
	#endif\n\
\n\
	envColor = envMapTexelToLinear( envColor );\n\
\n\
	#ifdef ENVMAP_BLENDING_MULTIPLY\n\
\n\
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\
\n\
	#elif defined( ENVMAP_BLENDING_MIX )\n\
\n\
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\
\n\
	#elif defined( ENVMAP_BLENDING_ADD )\n\
\n\
		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );