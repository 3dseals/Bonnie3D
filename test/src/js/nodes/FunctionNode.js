/**
 * @author sunag / http://www.sunag.com.br/
 * @thanks bhouston / https://clara.io/
 */

B3D.FunctionNode = function( src, includesOrType, extensionsOrIncludes, keywordsOrExtensions ) {

	src = src || '';

	this.isMethod = typeof includesOrType !== "string";
	this.useKeywords = true;

	B3D.TempNode.call( this, this.isMethod ? null : includesOrType );

	if ( this.isMethod ) this.eval( src, includesOrType, extensionsOrIncludes, keywordsOrExtensions );
	else this.eval( src, extensionsOrIncludes, keywordsOrExtensions );

};

B3D.FunctionNode.rDeclaration = /^([a-z_0-9]+)\s([a-z_0-9]+)\s?\((.*?)\)/i;
B3D.FunctionNode.rProperties = /[a-z_0-9]+/ig;

B3D.FunctionNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.FunctionNode.prototype.constructor = B3D.FunctionNode;

B3D.FunctionNode.prototype.isShared = function( builder, output ) {

	return ! this.isMethod;

};

B3D.FunctionNode.prototype.getType = function( builder ) {

	return builder.getTypeByFormat( this.type );

};

B3D.FunctionNode.prototype.getInputByName = function( name ) {

	var i = this.inputs.length;

	while ( i -- ) {

		if ( this.inputs[ i ].name === name )
			return this.inputs[ i ];

	}

};

B3D.FunctionNode.prototype.getIncludeByName = function( name ) {

	var i = this.includes.length;

	while ( i -- ) {

		if ( this.includes[ i ].name === name )
			return this.includes[ i ];

	}

};

B3D.FunctionNode.prototype.generate = function( builder, output ) {

	var match, offset = 0, src = this.value;

	for ( var i = 0; i < this.includes.length; i ++ ) {

		builder.include( this.includes[ i ], this );

	}

	for ( var ext in this.extensions ) {

		builder.material.extensions[ ext ] = true;

	}

	while ( match = B3D.FunctionNode.rProperties.exec( this.value ) ) {

		var prop = match[ 0 ], isGlobal = this.isMethod ? ! this.getInputByName( prop ) : true;
		var reference = prop;

		if ( this.keywords[ prop ] || ( this.useKeywords && isGlobal && B3D.NodeLib.containsKeyword( prop ) ) ) {

			var node = this.keywords[ prop ];

			if ( ! node ) {

				var keyword = B3D.NodeLib.getKeywordData( prop );

				if ( keyword.cache ) node = builder.keywords[ prop ];

				node = node || B3D.NodeLib.getKeyword( prop, builder );

				if ( keyword.cache ) builder.keywords[ prop ] = node;

			}

			reference = node.build( builder );

		}

		if ( prop != reference ) {

			src = src.substring( 0, match.index + offset ) + reference + src.substring( match.index + prop.length + offset );

			offset += reference.length - prop.length;

		}

		if ( this.getIncludeByName( reference ) === undefined && B3D.NodeLib.contains( reference ) ) {

			builder.include( B3D.NodeLib.get( reference ) );

		}

	}

	if ( output === 'source' ) {

		return src;

	} else if ( this.isMethod ) {

		builder.include( this, false, src );

		return this.name;

	} else {

		return builder.format( "(" + src + ")", this.getType( builder ), output );

	}

};

B3D.FunctionNode.prototype.eval = function( src, includes, extensions, keywords ) {

	src = ( src || '' ).trim();

	this.includes = includes || [];
	this.extensions = extensions || {};
	this.keywords = keywords || {};

	if ( this.isMethod ) {

		var match = src.match( B3D.FunctionNode.rDeclaration );

		this.inputs = [];

		if ( match && match.length == 4 ) {

			this.type = match[ 1 ];
			this.name = match[ 2 ];

			var inputs = match[ 3 ].match( B3D.FunctionNode.rProperties );

			if ( inputs ) {

				var i = 0;

				while ( i < inputs.length ) {

					var qualifier = inputs[ i ++ ];
					var type, name;

					if ( qualifier == 'in' || qualifier == 'out' || qualifier == 'inout' ) {

						type = inputs[ i ++ ];

					} else {

						type = qualifier;
						qualifier = '';

					}

					name = inputs[ i ++ ];

					this.inputs.push( {
						name : name,
						type : type,
						qualifier : qualifier
					} );

				}

			}

		} else {

			this.type = '';
			this.name = '';

		}

	}

	this.value = src;

};
