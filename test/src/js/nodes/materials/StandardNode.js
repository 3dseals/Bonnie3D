/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.StandardNode = function() {

	B3D.GLNode.call( this );

	this.color = new B3D.ColorNode( 0xEEEEEE );
	this.roughness = new B3D.FloatNode( 0.5 );
	this.metalness = new B3D.FloatNode( 0.5 );

};

B3D.StandardNode.prototype = Object.create( B3D.GLNode.prototype );
B3D.StandardNode.prototype.constructor = B3D.StandardNode;

B3D.StandardNode.prototype.build = function( builder ) {

	var material = builder.material;
	var code;

	material.define( 'PHYSICAL' );

	if ( !this.clearCoat && !this.clearCoatRoughness ) material.define( 'STANDARD' );

	material.define( 'ALPHATEST', '0.0' );

	material.requestAttribs.light = true;

	material.extensions.shaderTextureLOD = true;

	if ( builder.isShader( 'vertex' ) ) {

		var transform = this.transform ? this.transform.parseAndBuildCode( builder, 'v3', { cache : 'transform' } ) : undefined;

		material.mergeUniform( B3D.UniformsUtils.merge( [

			B3D.UniformsLib[ "fog" ],
			B3D.UniformsLib[ "lights" ]

		] ) );

		material.addVertexPars( [
			"varying vec3 vViewPosition;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			B3D.ShaderChunk[ "common" ],
			B3D.ShaderChunk[ "fog_pars_vertex" ],
			B3D.ShaderChunk[ "morphtarget_pars_vertex" ],
			B3D.ShaderChunk[ "skinning_pars_vertex" ],
			B3D.ShaderChunk[ "shadowmap_pars_vertex" ],
			B3D.ShaderChunk[ "logdepthbuf_pars_vertex" ]

		].join( "\n" ) );

		var output = [
			B3D.ShaderChunk[ "beginnormal_vertex" ],
			B3D.ShaderChunk[ "morphnormal_vertex" ],
			B3D.ShaderChunk[ "skinbase_vertex" ],
			B3D.ShaderChunk[ "skinnormal_vertex" ],
			B3D.ShaderChunk[ "defaultnormal_vertex" ],

			"#ifndef FLAT_SHADED", // Normal computed with derivatives when FLAT_SHADED

			"	vNormal = normalize( transformedNormal );",

			"#endif",

			B3D.ShaderChunk[ "begin_vertex" ],
			B3D.ShaderChunk[ "fog_vertex" ]        
		];

		if ( transform ) {

			output.push(
				transform.code,
				"transformed = " + transform.result + ";"
			);

		}

		output.push(
			B3D.ShaderChunk[ "morphtarget_vertex" ],
			B3D.ShaderChunk[ "skinning_vertex" ],
			B3D.ShaderChunk[ "project_vertex" ],
			B3D.ShaderChunk[ "logdepthbuf_vertex" ],

			"	vViewPosition = - mvPosition.xyz;",

			B3D.ShaderChunk[ "worldpos_vertex" ],
			B3D.ShaderChunk[ "shadowmap_vertex" ]
		);

		code = output.join( "\n" );

	} else {

		// blur textures for PBR effect

		var requires = {
			bias : new B3D.RoughnessToBlinnExponentNode(),
			offsetU : 0,
			offsetV : 0
		};

		var useClearCoat = !material.isDefined( 'STANDARD' );
		
		// parse all nodes to reuse generate codes

		this.color.parse( builder, { slot : 'color' } );
		this.roughness.parse( builder );
		this.metalness.parse( builder );

		if ( this.alpha ) this.alpha.parse( builder );
		
		if ( this.normal ) this.normal.parse( builder );
		if ( this.normalScale && this.normal ) this.normalScale.parse( builder );
		
		if (this.clearCoat) this.clearCoat.parse( builder );
		if (this.clearCoatRoughness) this.clearCoatRoughness.parse( builder );
		
		if ( this.reflectivity ) this.reflectivity.parse( builder );

		if ( this.light ) this.light.parse( builder, { cache : 'light' } );

		if ( this.ao ) this.ao.parse( builder );
		if ( this.ambient ) this.ambient.parse( builder );
		if ( this.shadow ) this.shadow.parse( builder );
		if ( this.emissive ) this.emissive.parse( builder, { slot : 'emissive' } );

		if ( this.environment ) this.environment.parse( builder, { cache : 'env', requires : requires, slot : 'environment' } ); // isolate environment from others inputs ( see TextureNode, CubeTextureNode )

		// build code

		var color = this.color.buildCode( builder, 'c', { slot : 'color' } );
		var roughness = this.roughness.buildCode( builder, 'fv1' );
		var metalness = this.metalness.buildCode( builder, 'fv1' );

		var alpha = this.alpha ? this.alpha.buildCode( builder, 'fv1' ) : undefined;
		
		var normal = this.normal ? this.normal.buildCode( builder, 'v3' ) : undefined;
		var normalScale = this.normalScale && this.normal ? this.normalScale.buildCode( builder, 'v2' ) : undefined;
		
		var clearCoat = this.clearCoat ? this.clearCoat.buildCode( builder, 'fv1' ) : undefined;
		var clearCoatRoughness = this.clearCoatRoughness ? this.clearCoatRoughness.buildCode( builder, 'fv1' ) : undefined;
		
		var reflectivity = this.reflectivity ? this.reflectivity.buildCode( builder, 'fv1' ) : undefined;

		var light = this.light ? this.light.buildCode( builder, 'v3', { cache : 'light' } ) : undefined;

		var ao = this.ao ? this.ao.buildCode( builder, 'fv1' ) : undefined;
		var ambient = this.ambient ? this.ambient.buildCode( builder, 'c' ) : undefined;
		var shadow = this.shadow ? this.shadow.buildCode( builder, 'c' ) : undefined;
		var emissive = this.emissive ? this.emissive.buildCode( builder, 'c', { slot : 'emissive' } ) : undefined;

		var environment = this.environment ? this.environment.buildCode( builder, 'c', { cache : 'env', requires : requires, slot : 'environment' } ) : undefined;

		var clearCoatEnv = useClearCoat && environment ? this.environment.buildCode( builder, 'c', { cache : 'clearCoat', requires : requires, slot : 'environment' } ) : undefined;

		material.requestAttribs.transparent = alpha != undefined;

		material.addFragmentPars( [

			"varying vec3 vViewPosition;",

			"#ifndef FLAT_SHADED",

			"	varying vec3 vNormal;",

			"#endif",

			B3D.ShaderChunk[ "common" ],
			B3D.ShaderChunk[ "fog_pars_fragment" ],
			B3D.ShaderChunk[ "bsdfs" ],
			B3D.ShaderChunk[ "lights_pars" ],
			B3D.ShaderChunk[ "lights_physical_pars_fragment" ],
			B3D.ShaderChunk[ "shadowmap_pars_fragment" ],
			B3D.ShaderChunk[ "logdepthbuf_pars_fragment" ]
		].join( "\n" ) );

		var output = [
				// prevent undeclared normal
				B3D.ShaderChunk[ "normal_flip" ],
				B3D.ShaderChunk[ "normal_fragment" ],

				// prevent undeclared material
			"	PhysicalMaterial material;",
			"	material.diffuseColor = vec3( 1.0 );",

				color.code,
			"	vec3 diffuseColor = " + color.result + ";",
			"	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",

				B3D.ShaderChunk[ "logdepthbuf_fragment" ],

			roughness.code,
			"	float roughnessFactor = " + roughness.result + ";",

			metalness.code,
			"	float metalnessFactor = " + metalness.result + ";"
		];

		if ( alpha ) {

			output.push(
				alpha.code,
				'if ( ' + alpha.result + ' <= ALPHATEST ) discard;'
			);

		}

		if ( normal ) {

			builder.include( 'perturbNormal2Arb' );

			output.push( normal.code );

			if ( normalScale ) output.push( normalScale.code );

			output.push(
				'normal = perturbNormal2Arb(-vViewPosition,normal,' +
				normal.result + ',' +
				new B3D.UVNode().build( builder, 'v2' ) + ',' +
				( normalScale ? normalScale.result : 'vec2( 1.0 )' ) + ');'
			);

		}

		// optimization for now

		output.push( 'material.diffuseColor = ' + ( light ? 'vec3( 1.0 )' : 'diffuseColor * (1.0 - metalnessFactor)' ) + ';' );

		output.push(
			// accumulation
			'material.specularRoughness = clamp( roughnessFactor, DEFAULT_SPECULAR_COEFFICIENT, 1.0 );' // disney's remapping of [ 0, 1 ] roughness to [ 0.001, 1 ]
		);
		
		if (clearCoat) {
			
			output.push(
				clearCoat.code,
				'material.clearCoat = saturate( ' + clearCoat.result + ' );'
			);
			
		} else if (useClearCoat) {
			
			output.push( 'material.clearCoat = 0.0;' );
			
		}
		
		if (clearCoatRoughness) {
			
			output.push(
				clearCoatRoughness.code,
				'material.clearCoatRoughness = clamp( ' + clearCoatRoughness.result + ', DEFAULT_SPECULAR_COEFFICIENT, 1.0 );'
			);
			
		} else if (useClearCoat) {
			
			output.push( 'material.clearCoatRoughness = 0.0;' );
			
		}
		
		if ( reflectivity ) {

			output.push(
				reflectivity.code,
				'material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( ' + reflectivity.result + ' ) ), diffuseColor, metalnessFactor );'
			);

		} else {

			output.push(
				'material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor, metalnessFactor );'
			);

		}

		output.push(
			B3D.ShaderChunk[ "lights_template" ]
		);

		if ( light ) {

			output.push(
				light.code,
				"reflectedLight.directDiffuse = " + light.result + ";"
			);

			// apply color

			output.push(
				"diffuseColor *= 1.0 - metalnessFactor;",

				"reflectedLight.directDiffuse *= diffuseColor;",
				"reflectedLight.indirectDiffuse *= diffuseColor;"
			);

		}

		if ( ao ) {

			output.push(
				ao.code,
				"reflectedLight.indirectDiffuse *= " + ao.result + ";",
				"float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );",
				"reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, " + ao.result + ", material.specularRoughness );"
			);

		}

		if ( ambient ) {

			output.push(
				ambient.code,
				"reflectedLight.indirectDiffuse += " + ambient.result + ";"
			);

		}

		if ( shadow ) {

			output.push(
				shadow.code,
				"reflectedLight.directDiffuse *= " + shadow.result + ";",
				"reflectedLight.directSpecular *= " + shadow.result + ";"
			);

		}

		if ( emissive ) {

			output.push(
				emissive.code,
				"reflectedLight.directDiffuse += " + emissive.result + ";"
			);

		}

		if ( environment ) {

			output.push( environment.code );

			if (clearCoatEnv) {

				output.push(
					clearCoatEnv.code,
					"vec3 clearCoatRadiance = " + clearCoatEnv.result + ";"
				);

			} else {

				output.push("vec3 clearCoatRadiance = vec3( 0.0 );");

			}

			output.push( "RE_IndirectSpecular(" + environment.result + ", clearCoatRadiance, geometry, material, reflectedLight );" );

		}

		output.push( "vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;" );

		if ( alpha ) {

			output.push( "gl_FragColor = vec4( outgoingLight, " + alpha.result + " );" );

		} else {

			output.push( "gl_FragColor = vec4( outgoingLight, 1.0 );" );

		}

		output.push(
			B3D.ShaderChunk[ "premultiplied_alpha_fragment" ],
			B3D.ShaderChunk[ "tonemapping_fragment" ],
			B3D.ShaderChunk[ "encodings_fragment" ],
			B3D.ShaderChunk[ "fog_fragment" ]
		);

		code = output.join( "\n" );

	}

	return code;

};