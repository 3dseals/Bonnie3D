(function ($) {

    class Node extends Bonnie3D.Object {

        constructor() {

            super();

            this._parent = null;
            this._children = [];
            this._components = [];

            this._up = Node.DefaultUp.clone();

            let position = new Bonnie3D.Vector3();
            let rotation = new Bonnie3D.Euler();
            let quaternion = new Bonnie3D.Quaternion();
            let scale = new Bonnie3D.Vector3( 1, 1, 1 );

            let onRotationChange = function() {

                quaternion.setFromEuler( rotation, false );

            }

            let onQuaternionChange = function() {

                rotation.setFromQuaternion( quaternion, undefined, false );

            }

            rotation.onChange( onRotationChange );
            quaternion.onChange( onQuaternionChange );

            this._position = position;
            this._rotation = rotation;
            this._quaternion = quaternion;
            this._scale = scale;
            this._modelViewMatrix = new Bonnie3D.Matrix4();
            this._normalMatrix = new Bonnie3D.Matrix4();

            this._matrix = new Bonnie3D.Matrix4();
            this._matrixWorld = new Bonnie3D.Matrix4();

            this._matrixAutoUpdate = Node.DefaultMatrixAutoUpdate;
            this._matrixWorldNeedsUpdate = false;

            this._layers = new Bonnie3D.Layers();
            this._visible = true;

            this._castShadow = false;
            this._receiveShadow = false;

            this._frustumCulled = true;
            this._renderOrder = 0;

            this._userData = {};
        }

        get parent() {
            return this._parent;
        }

        get position() {
            return this._position;
        }

        get matrixWorld() {
            return this._matrixWorld;
        }

        get modelViewMatrix() {
            return this._modelViewMatrix;
        }

        isEmptyNode () {
            return false;
        }

        onBeforeRender() {

        }

        onAfterRender() {

        }

        addChild(object) {

            if ( object === this ) {

                Bonnie3D.Log.error( "Bonnie3D.Node.addChild: node can't be added as a child of itself.", object );
                return this;

            }

            if ( object instanceof Bonnie3D.Node ) {

                if ( object._parent !== null ) {

                    object._parent.removeChild( object );

                }

                object._parent = this;
                //object.dispatchEvent( { type: 'added' } );

                this._children.push( object );

            } else if (object instanceof Bonnie3D.Component) {

                if ( object._node !== null ) {

                    if ( object._node._parent !== null ) {

                        object._node._parent.removeChild( object._node );

                    }

                }else {

                    object._node = new Bonnie3D.Node();
                    object._node.addComponent(object);

                }

                object._node._parent = this;

                this._children.push( object._node );

            } else {

                Bonnie3D.Log.error( "Bonnie3D.Node.addChild: child not an instance of Bonnie3D.Node or Bonnie3D.Component.", object );

            }

            return this;
        }

        removeChild(object) {

            let index = this._children.indexOf( object );

            if ( index !== - 1 ) {

                object._parent = null;

                this._children.splice( index, 1 );

            }

            return this;
        }

        getObjectById (id) {

            return this.getObjectByProperty( 'id', id );

        }

        getObjectByName (name) {

            return this.getObjectByProperty( 'name', name );

        }

        getObjectByProperty (name, value) {

        }

        addComponent(component) {

            if ( component instanceof Bonnie3D.Component ) {

                if ( component._node !== null ) {

                    component._node.removeComponent( component );

                }

                component._node = this;

                this._components.push( component );

            }else {

                Bonnie3D.Log.error( "Bonnie3D.Node.addComponent: child not an instance of Bonnie3D.Component.", component );

            }

            return this;

        }

        removeComponent(component) {

            let index = this._components.indexOf( component );

            if ( index !== - 1 ) {

                if(component._node.isEmptyNode()) {
                    component._node._parent.removeChild( component._node );
                }

                component._node = null;

                this._components.splice( index, 1 );

            }

            return this;

        }

        getComponentById (id) {

            return this.getComponentByProperty( 'id', id );

        }

        getComponentByName (name) {

            return this.getComponentByProperty( 'name', name );

        }

        getComponentByProperty (name, value) {

        }

        getWorldPosition (optionalTarget) {
            let result = optionalTarget || new Bonnie3D.ector3();

            this.updateMatrixWorld( true );

            return result.setFromMatrixPosition( this._matrixWorld );

        }

        getWorldQuaternion (optionalTarget) {

            let position = new Bonnie3D.Vector3();
            let scale = new Bonnie3D.Vector3();


            let result = optionalTarget || new Bonnie3D.Quaternion();

            this.updateMatrixWorld( true );

            this._matrixWorld.decompose( position, result, scale );

            return result;

        }

        getWorldRotation (optionalTarget) {

            let quaternion = new Bonnie3D.Quaternion();

            let result = optionalTarget || new Bonnie3D.Euler();

            this.getWorldQuaternion( quaternion );

            return result.setFromQuaternion( quaternion, this._rotation.order, false );


        }

        getWorldScale (optionalTarget) {

            let position = new Bonnie3D.Vector3();
            let quaternion = new Bonnie3D.Quaternion();


            let result = optionalTarget || new Bonnie3D.Vector3();

            this.updateMatrixWorld( true );

            this._matrixWorld.decompose( position, quaternion, result );

            return result;

        }

        getWorldDirection (optionalTarget) {

            let quaternion = new Bonnie3D.Quaternion();

            let result = optionalTarget || new Bonnie3D.Vector3();

            this.getWorldQuaternion( quaternion );

            return result.set( 0, 0, 1 ).applyQuaternion( quaternion );

        }

        updateMatrix () {

            this._matrix.compose( this._position, this._quaternion, this._scale );

            this._matrixWorldNeedsUpdate = true;

        }

        updateMatrixWorld (force) {

            if ( this._matrixAutoUpdate ) this.updateMatrix();

            if ( this._matrixWorldNeedsUpdate || force ) {

                if ( this.parent === null ) {

                    this._matrixWorld.copy( this._matrix );

                } else {

                    this._matrixWorld.multiplyMatrices( this.parent._matrixWorld, this._matrix );

                }

                this._matrixWorldNeedsUpdate = false;

                force = true;

            }

            // update children

            let children = this._children;

            for ( let i = 0, l = children.length; i < l; i ++ ) {

                children[ i ].updateMatrixWorld( force );

            }

        }

        get position() {

            return this._position;

        }

    }

    Node.DefaultUp = new Bonnie3D.Vector3( 0, 1, 0 );
    Node.DefaultMatrixAutoUpdate = true;

    Bonnie3D.Node = Node;

}(this));
