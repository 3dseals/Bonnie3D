/**
 * @author mrdoob / http://mrdoob.com/
 */

import { Audio } from './audio/Audio.js';
import { AudioAnalyser } from './audio/AudioAnalyser.js';
import { PerspectiveCamera } from './cameras/PerspectiveCamera.js';
import { CullFaceFront, CullFaceBack } from './constants.js';
import {
	Float64BufferAttribute,
	Float32BufferAttribute,
	Uint32BufferAttribute,
	Int32BufferAttribute,
	Uint16BufferAttribute,
	Int16BufferAttribute,
	Uint8ClampedBufferAttribute,
	Uint8BufferAttribute,
	Int8BufferAttribute,
	BufferAttribute
} from './core/BufferAttribute.js';
import { BufferGeometry } from './core/BufferGeometry.js';
import { Face3 } from './core/Face3.js';
import { Geometry } from './core/Geometry';
import { Object3D } from './core/Object3D.js';
import { Uniform } from './core/Uniform';
import { Curve } from './extras/core/Curve.js';
import { CatmullRomCurve3 } from './extras/curves/CatmullRomCurve3.js';
import { BoxHelper } from './helpers/BoxHelper';
import { GridHelper } from './helpers/GridHelper.js';
import { SkeletonHelper } from './helpers/SkeletonHelper.js';
import { BoxGeometry } from './geometries/BoxGeometry.js';
import { EdgesGeometry } from './geometries/EdgesGeometry.js';
import { ExtrudeGeometry } from './geometries/ExtrudeGeometry.js';
import { ShapeGeometry } from './geometries/ShapeGeometry.js';
import { WireframeGeometry } from './geometries/WireframeGeometry.js';
import { Light } from './lights/Light.js';
import { FileLoader } from './loaders/FileLoader.js';
import { AudioLoader } from './loaders/AudioLoader.js';
import { CubeTextureLoader } from './loaders/CubeTextureLoader.js';
import { DataTextureLoader } from './loaders/DataTextureLoader.js';
import { TextureLoader } from './loaders/TextureLoader.js';
import { Material } from './materials/Material.js';
import { LineBasicMaterial } from './materials/LineBasicMaterial.js';
import { MeshPhongMaterial } from './materials/MeshPhongMaterial.js';
import { PointsMaterial } from './materials/PointsMaterial.js';
import { ShaderMaterial } from './materials/ShaderMaterial.js';
import { Box2 } from './math/Box2.js';
import { Box3 } from './math/Box3.js';
import { Color } from './math/Color.js';
import { Line3 } from './math/Line3.js';
import { _Math } from './math/Math.js';
import { Matrix3 } from './math/Matrix3.js';
import { Matrix4 } from './math/Matrix4.js';
import { Plane } from './math/Plane.js';
import { Quaternion } from './math/Quaternion.js';
import { Ray } from './math/Ray.js';
import { Vector2 } from './math/Vector2.js';
import { Vector3 } from './math/Vector3.js';
import { Vector4 } from './math/Vector4.js';
import { LineSegments } from './objects/LineSegments.js';
import { LOD } from './objects/LOD.js';
import { Points } from './objects/Points.js';
import { Sprite } from './objects/Sprite.js';
import { Skeleton } from './objects/Skeleton.js';
import { WebGLRenderer } from './renderers/WebGLRenderer.js';
import { WebGLRenderTarget } from './renderers/WebGLRenderTarget.js';
import { WebGLShadowMap } from './renderers/webgl/WebGLShadowMap.js';
import { Shape } from './extras/core/Shape.js';

export { BoxGeometry as CubeGeometry };

export function Face4( a, b, c, d, normal, color, materialIndex ) {

	console.warn( 'B3D.Face4 has been removed. A B3D.Face3 will be created instead.' );
	return new Face3( a, b, c, normal, color, materialIndex );

}

export var LineStrip = 0;

export var LinePieces = 1;

export function MeshFaceMaterial( materials ) {

	console.warn( 'B3D.MeshFaceMaterial has been removed. Use an Array instead.' );
	return materials;

}

export function MultiMaterial( materials ) {

	if ( materials === undefined ) materials = [];

	console.warn( 'B3D.MultiMaterial has been removed. Use an Array instead.' );
	materials.isMultiMaterial = true;
	materials.materials = materials;
	materials.clone = function () {

		return materials.slice();

	};
	return materials;

}

export function PointCloud( geometry, material ) {

	console.warn( 'B3D.PointCloud has been renamed to B3D.Points.' );
	return new Points( geometry, material );

}

export function Particle( material ) {

	console.warn( 'B3D.Particle has been renamed to B3D.Sprite.' );
	return new Sprite( material );

}

export function ParticleSystem( geometry, material ) {

	console.warn( 'B3D.ParticleSystem has been renamed to B3D.Points.' );
	return new Points( geometry, material );

}

export function PointCloudMaterial( parameters ) {

	console.warn( 'B3D.PointCloudMaterial has been renamed to B3D.PointsMaterial.' );
	return new PointsMaterial( parameters );

}

export function ParticleBasicMaterial( parameters ) {

	console.warn( 'B3D.ParticleBasicMaterial has been renamed to B3D.PointsMaterial.' );
	return new PointsMaterial( parameters );

}

export function ParticleSystemMaterial( parameters ) {

	console.warn( 'B3D.ParticleSystemMaterial has been renamed to B3D.PointsMaterial.' );
	return new PointsMaterial( parameters );

}

export function Vertex( x, y, z ) {

	console.warn( 'B3D.Vertex has been removed. Use B3D.Vector3 instead.' );
	return new Vector3( x, y, z );

}

//

export function DynamicBufferAttribute( array, itemSize ) {

	console.warn( 'B3D.DynamicBufferAttribute has been removed. Use new B3D.BufferAttribute().setDynamic( true ) instead.' );
	return new BufferAttribute( array, itemSize ).setDynamic( true );

}

export function Int8Attribute( array, itemSize ) {

	console.warn( 'B3D.Int8Attribute has been removed. Use new B3D.Int8BufferAttribute() instead.' );
	return new Int8BufferAttribute( array, itemSize );

}

export function Uint8Attribute( array, itemSize ) {

	console.warn( 'B3D.Uint8Attribute has been removed. Use new B3D.Uint8BufferAttribute() instead.' );
	return new Uint8BufferAttribute( array, itemSize );

}

export function Uint8ClampedAttribute( array, itemSize ) {

	console.warn( 'B3D.Uint8ClampedAttribute has been removed. Use new B3D.Uint8ClampedBufferAttribute() instead.' );
	return new Uint8ClampedBufferAttribute( array, itemSize );

}

export function Int16Attribute( array, itemSize ) {

	console.warn( 'B3D.Int16Attribute has been removed. Use new B3D.Int16BufferAttribute() instead.' );
	return new Int16BufferAttribute( array, itemSize );

}

export function Uint16Attribute( array, itemSize ) {

	console.warn( 'B3D.Uint16Attribute has been removed. Use new B3D.Uint16BufferAttribute() instead.' );
	return new Uint16BufferAttribute( array, itemSize );

}

export function Int32Attribute( array, itemSize ) {

	console.warn( 'B3D.Int32Attribute has been removed. Use new B3D.Int32BufferAttribute() instead.' );
	return new Int32BufferAttribute( array, itemSize );

}

export function Uint32Attribute( array, itemSize ) {

	console.warn( 'B3D.Uint32Attribute has been removed. Use new B3D.Uint32BufferAttribute() instead.' );
	return new Uint32BufferAttribute( array, itemSize );

}

export function Float32Attribute( array, itemSize ) {

	console.warn( 'B3D.Float32Attribute has been removed. Use new B3D.Float32BufferAttribute() instead.' );
	return new Float32BufferAttribute( array, itemSize );

}

export function Float64Attribute( array, itemSize ) {

	console.warn( 'B3D.Float64Attribute has been removed. Use new B3D.Float64BufferAttribute() instead.' );
	return new Float64BufferAttribute( array, itemSize );

}

//

Curve.create = function ( construct, getPoint ) {

	console.log( 'B3D.Curve.create() has been deprecated' );

	construct.prototype = Object.create( Curve.prototype );
	construct.prototype.constructor = construct;
	construct.prototype.getPoint = getPoint;

	return construct;

};

//

export function ClosedSplineCurve3( points ) {

	console.warn( 'B3D.ClosedSplineCurve3 has been deprecated. Use B3D.CatmullRomCurve3 instead.' );

	CatmullRomCurve3.call( this, points );
	this.type = 'catmullrom';
	this.closed = true;

}

ClosedSplineCurve3.prototype = Object.create( CatmullRomCurve3.prototype );

//

export function SplineCurve3( points ) {

	console.warn( 'B3D.SplineCurve3 has been deprecated. Use B3D.CatmullRomCurve3 instead.' );

	CatmullRomCurve3.call( this, points );
	this.type = 'catmullrom';

}

SplineCurve3.prototype = Object.create( CatmullRomCurve3.prototype );

//

export function Spline( points ) {

	console.warn( 'B3D.Spline has been removed. Use B3D.CatmullRomCurve3 instead.' );

	CatmullRomCurve3.call( this, points );
	this.type = 'catmullrom';

}

Spline.prototype = Object.create( CatmullRomCurve3.prototype );

Object.assign( Spline.prototype, {

	initFromArray: function ( a ) {

		console.error( 'B3D.Spline: .initFromArray() has been removed.' );

	},
	getControlPointsArray: function ( optionalTarget ) {

		console.error( 'B3D.Spline: .getControlPointsArray() has been removed.' );

	},
	reparametrizeByArcLength: function ( samplingCoef ) {

		console.error( 'B3D.Spline: .reparametrizeByArcLength() has been removed.' );

	}

} );

//
export function BoundingBoxHelper( object, color ) {

	console.warn( 'B3D.BoundingBoxHelper has been deprecated. Creating a B3D.BoxHelper instead.' );
	return new BoxHelper( object, color );

}

export function EdgesHelper( object, hex ) {

	console.warn( 'B3D.EdgesHelper has been removed. Use B3D.EdgesGeometry instead.' );
	return new LineSegments( new EdgesGeometry( object.geometry ), new LineBasicMaterial( { color: hex !== undefined ? hex : 0xffffff } ) );

}

GridHelper.prototype.setColors = function () {

	console.error( 'B3D.GridHelper: setColors() has been deprecated, pass them in the constructor instead.' );

};

SkeletonHelper.prototype.update = function () {

	console.error( 'B3D.SkeletonHelper: update() no longer needs to be called.' );
	
};

export function WireframeHelper( object, hex ) {

	console.warn( 'B3D.WireframeHelper has been removed. Use B3D.WireframeGeometry instead.' );
	return new LineSegments( new WireframeGeometry( object.geometry ), new LineBasicMaterial( { color: hex !== undefined ? hex : 0xffffff } ) );

}

//

export function XHRLoader( manager ) {

	console.warn( 'B3D.XHRLoader has been renamed to B3D.FileLoader.' );
	return new FileLoader( manager );

}

export function BinaryTextureLoader( manager ) {

	console.warn( 'B3D.BinaryTextureLoader has been renamed to B3D.DataTextureLoader.' );
	return new DataTextureLoader( manager );

}

//

Object.assign( Box2.prototype, {

	center: function ( optionalTarget ) {

		console.warn( 'B3D.Box2: .center() has been renamed to .getCenter().' );
		return this.getCenter( optionalTarget );

	},
	empty: function () {

		console.warn( 'B3D.Box2: .empty() has been renamed to .isEmpty().' );
		return this.isEmpty();

	},
	isIntersectionBox: function ( box ) {

		console.warn( 'B3D.Box2: .isIntersectionBox() has been renamed to .intersectsBox().' );
		return this.intersectsBox( box );

	},
	size: function ( optionalTarget ) {

		console.warn( 'B3D.Box2: .size() has been renamed to .getSize().' );
		return this.getSize( optionalTarget );

	}
} );

Object.assign( Box3.prototype, {

	center: function ( optionalTarget ) {

		console.warn( 'B3D.Box3: .center() has been renamed to .getCenter().' );
		return this.getCenter( optionalTarget );

	},
	empty: function () {

		console.warn( 'B3D.Box3: .empty() has been renamed to .isEmpty().' );
		return this.isEmpty();

	},
	isIntersectionBox: function ( box ) {

		console.warn( 'B3D.Box3: .isIntersectionBox() has been renamed to .intersectsBox().' );
		return this.intersectsBox( box );

	},
	isIntersectionSphere: function ( sphere ) {

		console.warn( 'B3D.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().' );
		return this.intersectsSphere( sphere );

	},
	size: function ( optionalTarget ) {

		console.warn( 'B3D.Box3: .size() has been renamed to .getSize().' );
		return this.getSize( optionalTarget );

	}
} );

Line3.prototype.center = function ( optionalTarget ) {

	console.warn( 'B3D.Line3: .center() has been renamed to .getCenter().' );
	return this.getCenter( optionalTarget );

};

_Math.random16 = function () {

	console.warn( 'B3D.Math.random16() has been deprecated. Use Math.random() instead.' );
	return Math.random();

};

Object.assign( Matrix3.prototype, {

	flattenToArrayOffset: function ( array, offset ) {

		console.warn( "B3D.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead." );
		return this.toArray( array, offset );

	},
	multiplyVector3: function ( vector ) {

		console.warn( 'B3D.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.' );
		return vector.applyMatrix3( this );

	},
	multiplyVector3Array: function ( a ) {

		console.error( 'B3D.Matrix3: .multiplyVector3Array() has been removed.'  );

	},
	applyToBuffer: function( buffer, offset, length ) {

		console.warn( 'B3D.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.' );
		return this.applyToBufferAttribute( buffer );

	},
	applyToVector3Array: function( array, offset, length ) {

		console.error( 'B3D.Matrix3: .applyToVector3Array() has been removed.' );

	}

} );

Object.assign( Matrix4.prototype, {

	extractPosition: function ( m ) {

		console.warn( 'B3D.Matrix4: .extractPosition() has been renamed to .copyPosition().' );
		return this.copyPosition( m );

	},
	flattenToArrayOffset: function ( array, offset ) {

		console.warn( "B3D.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead." );
		return this.toArray( array, offset );

	},
	getPosition: function () {

		var v1;

		return function getPosition() {

			if ( v1 === undefined ) v1 = new Vector3();
			console.warn( 'B3D.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.' );
			return v1.setFromMatrixColumn( this, 3 );

		};

	}(),
	setRotationFromQuaternion: function ( q ) {

		console.warn( 'B3D.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().' );
		return this.makeRotationFromQuaternion( q );

	},
	multiplyToArray: function () {

		console.warn( 'B3D.Matrix4: .multiplyToArray() has been removed.' );

	},
	multiplyVector3: function ( vector ) {

		console.warn( 'B3D.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
		return vector.applyMatrix4( this );

	},
	multiplyVector4: function ( vector ) {

		console.warn( 'B3D.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
		return vector.applyMatrix4( this );

	},
	multiplyVector3Array: function ( a ) {

		console.error( 'B3D.Matrix4: .multiplyVector3Array() has been removed.'  );

	},
	rotateAxis: function ( v ) {

		console.warn( 'B3D.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.' );
		v.transformDirection( this );

	},
	crossVector: function ( vector ) {

		console.warn( 'B3D.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
		return vector.applyMatrix4( this );

	},
	translate: function () {

		console.error( 'B3D.Matrix4: .translate() has been removed.' );

	},
	rotateX: function () {

		console.error( 'B3D.Matrix4: .rotateX() has been removed.' );

	},
	rotateY: function () {

		console.error( 'B3D.Matrix4: .rotateY() has been removed.' );

	},
	rotateZ: function () {

		console.error( 'B3D.Matrix4: .rotateZ() has been removed.' );

	},
	rotateByAxis: function () {

		console.error( 'B3D.Matrix4: .rotateByAxis() has been removed.' );

	},
	applyToBuffer: function( buffer, offset, length ) {

		console.warn( 'B3D.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.' );
		return this.applyToBufferAttribute( buffer );

	},
	applyToVector3Array: function( array, offset, length ) {

		console.error( 'B3D.Matrix4: .applyToVector3Array() has been removed.' );

	},
	makeFrustum: function( left, right, bottom, top, near, far ) {

		console.warn( 'B3D.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.' );
		return this.makePerspective( left, right, top, bottom, near, far );

	}

} );

Plane.prototype.isIntersectionLine = function ( line ) {

	console.warn( 'B3D.Plane: .isIntersectionLine() has been renamed to .intersectsLine().' );
	return this.intersectsLine( line );

};

Quaternion.prototype.multiplyVector3 = function ( vector ) {

	console.warn( 'B3D.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.' );
	return vector.applyQuaternion( this );

};

Object.assign( Ray.prototype, {

	isIntersectionBox: function ( box ) {

		console.warn( 'B3D.Ray: .isIntersectionBox() has been renamed to .intersectsBox().' );
		return this.intersectsBox( box );

	},
	isIntersectionPlane: function ( plane ) {

		console.warn( 'B3D.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().' );
		return this.intersectsPlane( plane );

	},
	isIntersectionSphere: function ( sphere ) {

		console.warn( 'B3D.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().' );
		return this.intersectsSphere( sphere );

	}

} );

Object.assign( Shape.prototype, {

	extrude: function ( options ) {

		console.warn( 'B3D.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.' );
		return new ExtrudeGeometry( this, options );

	},
	makeGeometry: function ( options ) {

		console.warn( 'B3D.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.' );
		return new ShapeGeometry( this, options );

	}

} );

Object.assign( Vector2.prototype, {

	fromAttribute: function ( attribute, index, offset ) {

		console.error( 'B3D.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().' );
		return this.fromBufferAttribute( attribute, index, offset );

	}

} );

Object.assign( Vector3.prototype, {

	setEulerFromRotationMatrix: function () {

		console.error( 'B3D.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.' );

	},
	setEulerFromQuaternion: function () {

		console.error( 'B3D.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.' );

	},
	getPositionFromMatrix: function ( m ) {

		console.warn( 'B3D.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().' );
		return this.setFromMatrixPosition( m );

	},
	getScaleFromMatrix: function ( m ) {

		console.warn( 'B3D.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().' );
		return this.setFromMatrixScale( m );

	},
	getColumnFromMatrix: function ( index, matrix ) {

		console.warn( 'B3D.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().' );
		return this.setFromMatrixColumn( matrix, index );

	},
	applyProjection: function ( m ) {

		console.warn( 'B3D.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.' );
		return this.applyMatrix4( m );

	},
	fromAttribute: function ( attribute, index, offset ) {

		console.error( 'B3D.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().' );
		return this.fromBufferAttribute( attribute, index, offset );

	}

} );

Object.assign( Vector4.prototype, {

	fromAttribute: function ( attribute, index, offset ) {

		console.error( 'B3D.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().' );
		return this.fromBufferAttribute( attribute, index, offset );

	}

} );

//

Geometry.prototype.computeTangents = function () {

	console.warn( 'B3D.Geometry: .computeTangents() has been removed.' );

};

Object.assign( Object3D.prototype, {

	getChildByName: function ( name ) {

		console.warn( 'B3D.Object3D: .getChildByName() has been renamed to .getObjectByName().' );
		return this.getObjectByName( name );

	},
	renderDepth: function () {

		console.warn( 'B3D.Object3D: .renderDepth has been removed. Use .renderOrder, instead.' );

	},
	translate: function ( distance, axis ) {

		console.warn( 'B3D.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.' );
		return this.translateOnAxis( axis, distance );

	}

} );

Object.defineProperties( Object3D.prototype, {

	eulerOrder: {
		get: function () {

			console.warn( 'B3D.Object3D: .eulerOrder is now .rotation.order.' );
			return this.rotation.order;

		},
		set: function ( value ) {

			console.warn( 'B3D.Object3D: .eulerOrder is now .rotation.order.' );
			this.rotation.order = value;

		}
	},
	useQuaternion: {
		get: function () {

			console.warn( 'B3D.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

		},
		set: function () {

			console.warn( 'B3D.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

		}
	}

} );

Object.defineProperties( LOD.prototype, {

	objects: {
		get: function () {

			console.warn( 'B3D.LOD: .objects has been renamed to .levels.' );
			return this.levels;

		}
	}

} );

Object.defineProperty( Skeleton.prototype, 'useVertexTexture', {

	get: function () {

		console.warn( 'B3D.Skeleton: useVertexTexture has been removed.' );

	},
	set: function () {

		console.warn( 'B3D.Skeleton: useVertexTexture has been removed.' );

	}

} );

Object.defineProperty( Curve.prototype, '__arcLengthDivisions', {

	get: function () {

		console.warn( 'B3D.Curve: .__arcLengthDivisions is now .arcLengthDivisions.' );
		return this.arcLengthDivisions;

	},
	set: function ( value ) {

		console.warn( 'B3D.Curve: .__arcLengthDivisions is now .arcLengthDivisions.' );
		this.arcLengthDivisions = value;

	}

} );

//

PerspectiveCamera.prototype.setLens = function ( focalLength, filmGauge ) {

	console.warn( "B3D.PerspectiveCamera.setLens is deprecated. " +
			"Use .setFocalLength and .filmGauge for a photographic setup." );

	if ( filmGauge !== undefined ) this.filmGauge = filmGauge;
	this.setFocalLength( focalLength );

};

//

Object.defineProperties( Light.prototype, {
	onlyShadow: {
		set: function () {

			console.warn( 'B3D.Light: .onlyShadow has been removed.' );

		}
	},
	shadowCameraFov: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowCameraFov is now .shadow.camera.fov.' );
			this.shadow.camera.fov = value;

		}
	},
	shadowCameraLeft: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowCameraLeft is now .shadow.camera.left.' );
			this.shadow.camera.left = value;

		}
	},
	shadowCameraRight: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowCameraRight is now .shadow.camera.right.' );
			this.shadow.camera.right = value;

		}
	},
	shadowCameraTop: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowCameraTop is now .shadow.camera.top.' );
			this.shadow.camera.top = value;

		}
	},
	shadowCameraBottom: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowCameraBottom is now .shadow.camera.bottom.' );
			this.shadow.camera.bottom = value;

		}
	},
	shadowCameraNear: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowCameraNear is now .shadow.camera.near.' );
			this.shadow.camera.near = value;

		}
	},
	shadowCameraFar: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowCameraFar is now .shadow.camera.far.' );
			this.shadow.camera.far = value;

		}
	},
	shadowCameraVisible: {
		set: function () {

			console.warn( 'B3D.Light: .shadowCameraVisible has been removed. Use new B3D.CameraHelper( light.shadow.camera ) instead.' );

		}
	},
	shadowBias: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowBias is now .shadow.bias.' );
			this.shadow.bias = value;

		}
	},
	shadowDarkness: {
		set: function () {

			console.warn( 'B3D.Light: .shadowDarkness has been removed.' );

		}
	},
	shadowMapWidth: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowMapWidth is now .shadow.mapSize.width.' );
			this.shadow.mapSize.width = value;

		}
	},
	shadowMapHeight: {
		set: function ( value ) {

			console.warn( 'B3D.Light: .shadowMapHeight is now .shadow.mapSize.height.' );
			this.shadow.mapSize.height = value;

		}
	}
} );

//

Object.defineProperties( BufferAttribute.prototype, {

	length: {
		get: function () {

			console.warn( 'B3D.BufferAttribute: .length has been deprecated. Use .count instead.' );
			return this.array.length;

		}
	}

} );

Object.assign( BufferGeometry.prototype, {

	addIndex: function ( index ) {

		console.warn( 'B3D.BufferGeometry: .addIndex() has been renamed to .setIndex().' );
		this.setIndex( index );

	},
	addDrawCall: function ( start, count, indexOffset ) {

		if ( indexOffset !== undefined ) {

			console.warn( 'B3D.BufferGeometry: .addDrawCall() no longer supports indexOffset.' );

		}
		console.warn( 'B3D.BufferGeometry: .addDrawCall() is now .addGroup().' );
		this.addGroup( start, count );

	},
	clearDrawCalls: function () {

		console.warn( 'B3D.BufferGeometry: .clearDrawCalls() is now .clearGroups().' );
		this.clearGroups();

	},
	computeTangents: function () {

		console.warn( 'B3D.BufferGeometry: .computeTangents() has been removed.' );

	},
	computeOffsets: function () {

		console.warn( 'B3D.BufferGeometry: .computeOffsets() has been removed.' );

	}

} );

Object.defineProperties( BufferGeometry.prototype, {

	drawcalls: {
		get: function () {

			console.error( 'B3D.BufferGeometry: .drawcalls has been renamed to .groups.' );
			return this.groups;

		}
	},
	offsets: {
		get: function () {

			console.warn( 'B3D.BufferGeometry: .offsets has been renamed to .groups.' );
			return this.groups;

		}
	}

} );

//

Object.defineProperties( Uniform.prototype, {

	dynamic: {
		set: function () {

			console.warn( 'B3D.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.' );

		}
	},
	onUpdate: {
		value: function () {

			console.warn( 'B3D.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.' );
			return this;

		}
	}

} );

//

Object.defineProperties( Material.prototype, {

	wrapAround: {
		get: function () {

			console.warn( 'B3D.Material: .wrapAround has been removed.' );

		},
		set: function () {

			console.warn( 'B3D.Material: .wrapAround has been removed.' );

		}
	},
	wrapRGB: {
		get: function () {

			console.warn( 'B3D.Material: .wrapRGB has been removed.' );
			return new Color();

		}
	}

} );

Object.defineProperties( MeshPhongMaterial.prototype, {

	metal: {
		get: function () {

			console.warn( 'B3D.MeshPhongMaterial: .metal has been removed. Use B3D.MeshStandardMaterial instead.' );
			return false;

		},
		set: function () {

			console.warn( 'B3D.MeshPhongMaterial: .metal has been removed. Use B3D.MeshStandardMaterial instead' );

		}
	}

} );

Object.defineProperties( ShaderMaterial.prototype, {

	derivatives: {
		get: function () {

			console.warn( 'B3D.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.' );
			return this.extensions.derivatives;

		},
		set: function ( value ) {

			console.warn( 'B3D. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.' );
			this.extensions.derivatives = value;

		}
	}

} );

//

Object.assign( WebGLRenderer.prototype, {

	getCurrentRenderTarget: function () {

		console.warn( 'B3D.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().' );
		return this.getRenderTarget();

	},

	supportsFloatTextures: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( \'OES_texture_float\' ).' );
		return this.extensions.get( 'OES_texture_float' );

	},
	supportsHalfFloatTextures: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( \'OES_texture_half_float\' ).' );
		return this.extensions.get( 'OES_texture_half_float' );

	},
	supportsStandardDerivatives: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( \'OES_standard_derivatives\' ).' );
		return this.extensions.get( 'OES_standard_derivatives' );

	},
	supportsCompressedTextureS3TC: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( \'WEBGL_compressed_texture_s3tc\' ).' );
		return this.extensions.get( 'WEBGL_compressed_texture_s3tc' );

	},
	supportsCompressedTexturePVRTC: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( \'WEBGL_compressed_texture_pvrtc\' ).' );
		return this.extensions.get( 'WEBGL_compressed_texture_pvrtc' );

	},
	supportsBlendMinMax: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( \'EXT_blend_minmax\' ).' );
		return this.extensions.get( 'EXT_blend_minmax' );

	},
	supportsVertexTextures: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.' );
		return this.capabilities.vertexTextures;

	},
	supportsInstancedArrays: function () {

		console.warn( 'B3D.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( \'ANGLE_instanced_arrays\' ).' );
		return this.extensions.get( 'ANGLE_instanced_arrays' );

	},
	enableScissorTest: function ( boolean ) {

		console.warn( 'B3D.WebGLRenderer: .enableScissorTest() is now .setScissorTest().' );
		this.setScissorTest( boolean );

	},
	initMaterial: function () {

		console.warn( 'B3D.WebGLRenderer: .initMaterial() has been removed.' );

	},
	addPrePlugin: function () {

		console.warn( 'B3D.WebGLRenderer: .addPrePlugin() has been removed.' );

	},
	addPostPlugin: function () {

		console.warn( 'B3D.WebGLRenderer: .addPostPlugin() has been removed.' );

	},
	updateShadowMap: function () {

		console.warn( 'B3D.WebGLRenderer: .updateShadowMap() has been removed.' );

	}

} );

Object.defineProperties( WebGLRenderer.prototype, {

	shadowMapEnabled: {
		get: function () {

			return this.shadowMap.enabled;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.' );
			this.shadowMap.enabled = value;

		}
	},
	shadowMapType: {
		get: function () {

			return this.shadowMap.type;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderer: .shadowMapType is now .shadowMap.type.' );
			this.shadowMap.type = value;

		}
	},
	shadowMapCullFace: {
		get: function () {

			return this.shadowMap.cullFace;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.' );
			this.shadowMap.cullFace = value;

		}
	}
} );

Object.defineProperties( WebGLShadowMap.prototype, {

	cullFace: {
		get: function () {

			return this.renderReverseSided ? CullFaceFront : CullFaceBack;

		},
		set: function ( cullFace ) {

			var value = ( cullFace !== CullFaceBack );
			console.warn( "WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + value + "." );
			this.renderReverseSided = value;

		}
	}

} );

//

Object.defineProperties( WebGLRenderTarget.prototype, {

	wrapS: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .wrapS is now .texture.wrapS.' );
			return this.texture.wrapS;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .wrapS is now .texture.wrapS.' );
			this.texture.wrapS = value;

		}
	},
	wrapT: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .wrapT is now .texture.wrapT.' );
			return this.texture.wrapT;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .wrapT is now .texture.wrapT.' );
			this.texture.wrapT = value;

		}
	},
	magFilter: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .magFilter is now .texture.magFilter.' );
			return this.texture.magFilter;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .magFilter is now .texture.magFilter.' );
			this.texture.magFilter = value;

		}
	},
	minFilter: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .minFilter is now .texture.minFilter.' );
			return this.texture.minFilter;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .minFilter is now .texture.minFilter.' );
			this.texture.minFilter = value;

		}
	},
	anisotropy: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.' );
			return this.texture.anisotropy;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.' );
			this.texture.anisotropy = value;

		}
	},
	offset: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .offset is now .texture.offset.' );
			return this.texture.offset;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .offset is now .texture.offset.' );
			this.texture.offset = value;

		}
	},
	repeat: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .repeat is now .texture.repeat.' );
			return this.texture.repeat;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .repeat is now .texture.repeat.' );
			this.texture.repeat = value;

		}
	},
	format: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .format is now .texture.format.' );
			return this.texture.format;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .format is now .texture.format.' );
			this.texture.format = value;

		}
	},
	type: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .type is now .texture.type.' );
			return this.texture.type;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .type is now .texture.type.' );
			this.texture.type = value;

		}
	},
	generateMipmaps: {
		get: function () {

			console.warn( 'B3D.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.' );
			return this.texture.generateMipmaps;

		},
		set: function ( value ) {

			console.warn( 'B3D.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.' );
			this.texture.generateMipmaps = value;

		}
	}

} );

//

Audio.prototype.load = function ( file ) {

	console.warn( 'B3D.Audio: .load has been deprecated. Use B3D.AudioLoader instead.' );
	var scope = this;
	var audioLoader = new AudioLoader();
	audioLoader.load( file, function ( buffer ) {

		scope.setBuffer( buffer );

	} );
	return this;

};

AudioAnalyser.prototype.getData = function () {

	console.warn( 'B3D.AudioAnalyser: .getData() is now .getFrequencyData().' );
	return this.getFrequencyData();

};

//

export var GeometryUtils = {

	merge: function ( geometry1, geometry2, materialIndexOffset ) {

		console.warn( 'B3D.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.' );
		var matrix;

		if ( geometry2.isMesh ) {

			geometry2.matrixAutoUpdate && geometry2.updateMatrix();

			matrix = geometry2.matrix;
			geometry2 = geometry2.geometry;

		}

		geometry1.merge( geometry2, matrix, materialIndexOffset );

	},

	center: function ( geometry ) {

		console.warn( 'B3D.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.' );
		return geometry.center();

	}

};

export var ImageUtils = {

	crossOrigin: undefined,

	loadTexture: function ( url, mapping, onLoad, onError ) {

		console.warn( 'B3D.ImageUtils.loadTexture has been deprecated. Use B3D.TextureLoader() instead.' );

		var loader = new TextureLoader();
		loader.setCrossOrigin( this.crossOrigin );

		var texture = loader.load( url, onLoad, undefined, onError );

		if ( mapping ) texture.mapping = mapping;

		return texture;

	},

	loadTextureCube: function ( urls, mapping, onLoad, onError ) {

		console.warn( 'B3D.ImageUtils.loadTextureCube has been deprecated. Use B3D.CubeTextureLoader() instead.' );

		var loader = new CubeTextureLoader();
		loader.setCrossOrigin( this.crossOrigin );

		var texture = loader.load( urls, onLoad, undefined, onError );

		if ( mapping ) texture.mapping = mapping;

		return texture;

	},

	loadCompressedTexture: function () {

		console.error( 'B3D.ImageUtils.loadCompressedTexture has been removed. Use B3D.DDSLoader instead.' );

	},

	loadCompressedTextureCube: function () {

		console.error( 'B3D.ImageUtils.loadCompressedTextureCube has been removed. Use B3D.DDSLoader instead.' );

	}

};

//

export function Projector() {

	console.error( 'B3D.Projector has been moved to /examples/js/renderers/Projector.js.' );

	this.projectVector = function ( vector, camera ) {

		console.warn( 'B3D.Projector: .projectVector() is now vector.project().' );
		vector.project( camera );

	};

	this.unprojectVector = function ( vector, camera ) {

		console.warn( 'B3D.Projector: .unprojectVector() is now vector.unproject().' );
		vector.unproject( camera );

	};

	this.pickingRay = function () {

		console.error( 'B3D.Projector: .pickingRay() is now raycaster.setFromCamera().' );

	};

}

//

export function CanvasRenderer() {

	console.error( 'B3D.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js' );

	this.domElement = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
	this.clear = function () {};
	this.render = function () {};
	this.setClearColor = function () {};
	this.setSize = function () {};

}


window.B3D = window.B3D || {};
B3D.CubeGeometry = B3D.BoxGeometry;
B3D.Face4 = Face4;
B3D.LineStrip = LineStrip;
B3D.LinePieces = LinePieces;
B3D.MeshFaceMaterial = MeshFaceMaterial;
B3D.MultiMaterial = MultiMaterial;
B3D.PointCloud = PointCloud;
B3D.Particle = Particle;
B3D.ParticleSystem = ParticleSystem;
B3D.PointCloudMaterial = PointCloudMaterial;
B3D.ParticleBasicMaterial = ParticleBasicMaterial;
B3D.ParticleSystemMaterial = ParticleSystemMaterial;
B3D.Vertex = Vertex;
B3D.DynamicBufferAttribute = DynamicBufferAttribute;
B3D.Int8Attribute = Int8Attribute;
B3D.Uint8Attribute = Uint8Attribute;
B3D.Uint8ClampedAttribute = Uint8ClampedAttribute;
B3D.Int16Attribute = Int16Attribute;
B3D.Uint16Attribute = Uint16Attribute;
B3D.Int32Attribute = Int32Attribute;
B3D.Uint32Attribute = Uint32Attribute;
B3D.Float32Attribute = Float32Attribute;
B3D.Float64Attribute = Float64Attribute;
B3D.ClosedSplineCurve3 = ClosedSplineCurve3;
B3D.SplineCurve3 = SplineCurve3;
B3D.Spline = Spline;
B3D.BoundingBoxHelper = BoundingBoxHelper;
B3D.EdgesHelper = EdgesHelper;
B3D.WireframeHelper = WireframeHelper;
B3D.XHRLoader = XHRLoader;
B3D.BinaryTextureLoader = BinaryTextureLoader;
B3D.GeometryUtils = GeometryUtils;
B3D.ImageUtils = ImageUtils;
B3D.Projector = Projector;
B3D.CanvasRenderer = CanvasRenderer;