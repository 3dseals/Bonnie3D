/**
 * @author Alexander Gessler / http://www.greentoken.de/
 * https://github.com/acgessler
 *
 * Loader for models imported with Open Asset Import Library (http://assimp.sf.net)
 * through assimp2json (https://github.com/acgessler/assimp2json).
 *
 * Supports any input format that assimp supports, including 3ds, obj, dae, blend,
 * fbx, x, ms3d, lwo (and many more).
 *
 * See webgl_loader_assimp2json example.
 */

B3D.AssimpJSONLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : B3D.DefaultLoadingManager;

};

B3D.AssimpJSONLoader.prototype = {

	constructor: B3D.AssimpJSONLoader,

	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		this.texturePath = this.texturePath && ( typeof this.texturePath === "string" ) ? this.texturePath : this.extractUrlBase( url );

		var loader = new B3D.FileLoader( this.manager );
		loader.load( url, function ( text ) {

			var json = JSON.parse( text ), scene, metadata;

			// Check __metadata__ meta header if present
			// This header is used to disambiguate between
			// different JSON-based file formats.
			metadata = json.__metadata__;
			if ( typeof metadata !== 'undefined' ) {

				// Check if assimp2json at all
				if ( metadata.format !== 'assimp2json' ) {

					onError( 'Not an assimp2json scene' );
					return;

				}
				// Check major format version
				else if ( metadata.version < 100 && metadata.version >= 200 ) {

					onError( 'Unsupported assimp2json file format version' );
					return;

				}

			}

			scene = scope.parse( json );
			onLoad( scene );

		}, onProgress, onError );

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;

	},

	setTexturePath: function ( value ) {

		this.texturePath = value;

	},

	extractUrlBase: function ( url ) {

		// from three/src/loaders/Loader.js
		var parts = url.split( '/' );
		parts.pop();
		return ( parts.length < 1 ? '.' : parts.join( '/' ) ) + '/';

	},

	parse: function ( json ) {

		var meshes = this.parseList ( json.meshes, this.parseMesh );
		var materials = this.parseList ( json.materials, this.parseMaterial );
		return this.parseObject( json, json.rootnode, meshes, materials );

	},

	parseList : function( json, handler ) {

		var meshes = new Array( json.length );
		for ( var i = 0; i < json.length; ++ i ) {

			meshes[ i ] = handler.call( this, json[ i ] );

		}
		return meshes;

	},

	parseMesh : function( json ) {

		var geometry = new B3D.BufferGeometry();

		var i, l, face;

		var indices = [];

		var vertices = json.vertices || [];
		var normals = json.normals || [];
		var uvs = json.texturecoords || [];
		var colors = json.colors || [];

		uvs = uvs[ 0 ] || []; // only support for a single set of uvs

		for ( i = 0, l = json.faces.length; i < l; i ++ ) {

			face = json.faces[ i ];
			indices.push( face[ 0 ], face[ 1 ], face[ 2 ] );

		}

		geometry.setIndex( indices );
		geometry.addAttribute( 'position', new B3D.Float32BufferAttribute( vertices, 3 ) );

		if ( normals.length > 0 ) {

			geometry.addAttribute( 'normal', new B3D.Float32BufferAttribute( normals, 3 ) );

		}

		if ( uvs.length > 0 ) {

			geometry.addAttribute( 'uv', new B3D.Float32BufferAttribute( uvs, 2 ) );

		}

		if ( colors.length > 0 ) {

			geometry.addAttribute( 'color', new B3D.Float32BufferAttribute( colors, 3 ) );

		}

		geometry.computeBoundingSphere();

		return geometry;

	},

	parseMaterial : function( json ) {

		var mat = null;
		var scope = this;
		var i, prop, has_textures = [],

		init_props = {
			shading : B3D.SmoothShading
		};

		function toColor( value_arr ) {

			var col = new B3D.Color();
			col.setRGB( value_arr[ 0 ], value_arr[ 1 ], value_arr[ 2 ] );
			return col;

		}

		function defaultTexture() {

			var im = new Image();
			im.width = 1;
			im.height = 1;
			return new B3D.Texture( im );

		}

		for ( i in json.properties ) {

			prop = json.properties[ i ];

			if ( prop.key === '$tex.file' ) {

				// prop.semantic gives the type of the texture
				// 1: diffuse
				// 2: specular mao
				// 5: height map (bumps)
				// 6: normal map
				// more values (i.e. emissive, environment) are known by assimp and may be relevant
				if ( prop.semantic === 1 || prop.semantic === 5 || prop.semantic === 6 || prop.semantic === 2 ) {

					( function( semantic ) {

						var loader = new B3D.TextureLoader( scope.manager ),
						keyname;

						if ( semantic === 1 ) {

							keyname = 'map';

						} else if ( semantic === 5 ) {

							keyname = 'bumpMap';

						} else if ( semantic === 6 ) {

							keyname = 'normalMap';

						} else if ( semantic === 2 ) {

							keyname = 'specularMap';

						}

						has_textures.push( keyname );

						loader.setCrossOrigin( this.crossOrigin );
						var material_url = scope.texturePath + '/' + prop.value;
						material_url = material_url.replace( /\\/g, '/' );
						loader.load( material_url, function( tex ) {

							if ( tex ) {

								// TODO: read texture settings from assimp.
								// Wrapping is the default, though.
								tex.wrapS = tex.wrapT = B3D.RepeatWrapping;

								mat[ keyname ] = tex;
								mat.needsUpdate = true;

							}

						} );

					} )( prop.semantic );

				}

			} else if ( prop.key === '?mat.name' ) {

				init_props.name = prop.value;

			} else if ( prop.key === '$clr.diffuse' ) {

				init_props.color = toColor( prop.value );

			} else if ( prop.key === '$clr.specular' ) {

				init_props.specular = toColor( prop.value );

			} else if ( prop.key === '$clr.emissive' ) {

				init_props.emissive = toColor( prop.value );

			} else if ( prop.key === '$mat.shadingm' ) {

				// aiShadingMode_Flat
				if ( prop.value === 1 ) {

					init_props.shading = B3D.FlatShading;

				}

			} else if ( prop.key === '$mat.shininess' ) {

				init_props.shininess = prop.value;

			}

		}

		// note: three.js does not like it when a texture is added after the geometry
		// has been rendered once, see http://stackoverflow.com/questions/16531759/.
		// for this reason we fill all slots upfront with default textures
		if ( has_textures.length ) {

			for ( i = has_textures.length - 1; i >= 0; -- i ) {

				init_props[ has_textures[ i ]] = defaultTexture();

			}

		}

		mat = new B3D.MeshPhongMaterial( init_props );
		return mat;

	},

	parseObject : function( json, node, meshes, materials ) {

		var obj = new B3D.Object3D(),	i, idx;

		obj.name = node.name || "";
		obj.matrix = new B3D.Matrix4().fromArray( node.transformation ).transpose();
		obj.matrix.decompose( obj.position, obj.quaternion, obj.scale );

		for ( i = 0; node.meshes && i < node.meshes.length; ++ i ) {

			idx = node.meshes[ i ];
			obj.add( new B3D.Mesh( meshes[ idx ], materials[ json.meshes[ idx ].materialindex ] ) );

		}

		for ( i = 0; node.children && i < node.children.length; ++ i ) {

			obj.add( this.parseObject( json, node.children[ i ], meshes, materials ) );

		}

		return obj;

	}
};
