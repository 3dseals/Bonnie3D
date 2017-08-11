/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.PhongNode = function() {

	B3D.GLNode.call( this );

	this.color = new B3D.ColorNode( 0xEEEEEE );
	this.specular = new B3D.ColorNode( 0x111111 );
	this.shininess = new B3D.FloatNode( 30 );

};

B3D.PhongNode.prototype = Object.create( B3D.GLNode.prototype );
B3D.PhongNode.prototype.constructor = B3D.PhongNode;

B3D.PhongNode.prototype.build = function( builder ) {

	var material = builder.material;
	var code;

	material.define( 'PHONG' );
	material.define( 'ALPHATEST', '0.0' );

	material.requestAttribs.light = true;

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
			B3D.ShaderChunk[ "fog_parse_vertex" ],
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

		// parse all nodes to reuse generate codes

		this.color.parse( builder, { slot : 'color' } );
		this.specular.parse( builder );
		this.shininess.parse( builder );

		if ( this.alpha ) this.alpha.parse( builder );
		
		if ( this.normal ) this.normal.parse( builder );
		if ( this.normalScale && this.normal ) this.normalScale.parse( builder );
		
		if ( this.light ) this.light.parse( builder, { cache : 'light' } );

		if ( this.ao ) this.ao.parse( builder );
		if ( this.ambient ) this.ambient.parse( builder );
		if ( this.shadow ) this.shadow.parse( builder );
		if ( this.emissive ) this.emissive.parse( builder, { slot : 'emissive' } );

		if ( this.environment ) this.environment.parse( builder, { slot : 'environment' } );
		if ( this.environmentAlpha && this.environment ) this.environmentAlpha.parse( builder );

		// build code

		var color = this.color.buildCode( builder, 'c', { slot : 'color' } );
		var specular = this.specular.buildCode( builder, 'c' );
		var shininess = this.shininess.buildCode( builder, 'fv1' );

		var alpha = this.alpha ? this.alpha.buildCode( builder, 'fv1' ) : undefined;
		
		var normal = this.normal ? this.normal.buildCode( builder, 'v3' ) : undefined;
		var normalScale = this.normalScale && this.normal ? this.normalScale.buildCode( builder, 'v2' ) : undefined;
		
		var light = this.light ? this.light.buildCode( builder, 'v3', { cache : 'light' } ) : undefined;

		var ao = this.ao ? this.ao.buildCode( builder, 'fv1' ) : undefined;
		var ambient = this.ambient ? this.ambient.buildCode( builder, 'c' ) : undefined;
		var shadow = this.shadow ? this.shadow.buildCode( builder, 'c' ) : undefined;
		var emissive = this.emissive ? this.emissive.buildCode( builder, 'c', { slot : 'emissive' } ) : undefined;

		var environment = this.environment ? this.environment.buildCode( builder, 'c', { slot : 'environment' } ) : undefined;
		var environmentAlpha = this.environmentAlpha && this.environment ? this.environmentAlpha.buildCode( builder, 'fv1' ) : undefined;

		material.requestAttribs.transparent = alpha != undefined;

		material.addFragmentPars( [
			B3D.ShaderChunk[ "common" ],
			B3D.ShaderChunk[ "fog_pars_fragment" ],
			B3D.ShaderChunk[ "bsdfs" ],
			B3D.ShaderChunk[ "lights_pars" ],
			B3D.ShaderChunk[ "lights_phong_pars_fragment" ],
			B3D.ShaderChunk[ "shadowmap_pars_fragment" ],
			B3D.ShaderChunk[ "logdepthbuf_pars_fragment" ]
		].join( "\n" ) );

		var output = [
				// prevent undeclared normal
				B3D.ShaderChunk[ "normal_flip" ],
				B3D.ShaderChunk[ "normal_fragment" ],

				// prevent undeclared material
			"	BlinnPhongMaterial material;",

				color.code,
			"	vec3 diffuseColor = " + color.result + ";",
			"	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",

				B3D.ShaderChunk[ "logdepthbuf_fragment" ],

			specular.code,
			"	vec3 specular = " + specular.result + ";",

			shininess.code,
			"	float shininess = max(0.0001," + shininess.result + ");",

			"	float specularStrength = 1.0;" // Ignored in MaterialNode ( replace to specular )
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

		output.push( 'material.diffuseColor = ' + ( light ? 'vec3( 1.0 )' : 'diffuseColor' ) + ';' );

		output.push(
			// accumulation
			'material.specularColor = specular;',
			'material.specularShininess = shininess;',
			'material.specularStrength = specularStrength;',

			B3D.ShaderChunk[ "lights_template" ]
		);

		if ( light ) {

			output.push(
				light.code,
				"reflectedLight.directDiffuse = " + light.result + ";"
			);

			// apply color

			output.push(
				"reflectedLight.directDiffuse *= diffuseColor;",
				"reflectedLight.indirectDiffuse *= diffuseColor;"
			);

		}

		if ( ao ) {

			output.push(
				ao.code,
				"reflectedLight.indirectDiffuse *= " + ao.result + ";"
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

		output.push( "vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular;" );

		if ( environment ) {

			output.push( environment.code );

			if ( environmentAlpha ) {

				output.push(
					environmentAlpha.code,
					"outgoingLight = mix( outgoingLight, " + environment.result + ", " + environmentAlpha.result + " );"
				);

			} else {

				output.push( "outgoingLight = " + environment.result + ";" );

			}

		}

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
