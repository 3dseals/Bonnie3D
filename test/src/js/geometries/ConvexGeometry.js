/**
 * @author Mugen87 / https://github.com/Mugen87
 */

( function() {

	// ConvexGeometry

	function ConvexGeometry( points ) {

		B3D.Geometry.call( this );

		this.type = 'ConvexGeometry';

		this.fromBufferGeometry( new ConvexBufferGeometry( points ) );
		this.mergeVertices();

	}

	ConvexGeometry.prototype = Object.create( B3D.Geometry.prototype );
	ConvexGeometry.prototype.constructor = ConvexGeometry;

	// ConvexBufferGeometry

	function ConvexBufferGeometry( points ) {

	  B3D.BufferGeometry.call( this );

		this.type = 'ConvexBufferGeometry';

	  // buffers

	  var vertices = [];
	  var normals = [];

	  // execute QuickHull

		if ( B3D.QuickHull === undefined ) {

			console.error( 'B3D.ConvexBufferGeometry: ConvexBufferGeometry relies on B3D.QuickHull' );

		}

	  var quickHull = new B3D.QuickHull().setFromPoints( points );

	  // generate vertices and normals

	  var faces = quickHull.faces;

	  for ( var i = 0; i < faces.length; i ++ ) {

	    var face = faces[ i ];
	    var edge = face.edge;

	    // we move along a doubly-connected edge list to access all face points (see HalfEdge docs)

	    do {

	      var point = edge.head().point;

	      vertices.push( point.x, point.y, point.z );
	      normals.push( face.normal.x, face.normal.y, face.normal.z );

	      edge = edge.next;

	    } while ( edge !== face.edge );

	  }

	  // build geometry

	  this.addAttribute( 'position', new B3D.Float32BufferAttribute( vertices, 3 ) );
	  this.addAttribute( 'normal', new B3D.Float32BufferAttribute( normals, 3 ) );

	}

	ConvexBufferGeometry.prototype = Object.create( B3D.BufferGeometry.prototype );
	ConvexBufferGeometry.prototype.constructor = ConvexBufferGeometry;

	// export

	B3D.ConvexGeometry = ConvexGeometry;
	B3D.ConvexBufferGeometry = ConvexBufferGeometry;

} ) ();
