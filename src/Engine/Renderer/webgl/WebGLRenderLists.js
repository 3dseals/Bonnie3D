(function ($) {

    class WebGLRenderList {

        constructor() {

            this.opaque = [];
            this._opaqueLastIndex = - 1;

            this.transparent = [];
            this._transparentLastIndex = - 1;

        }

        init() {
            this._opaqueLastIndex = - 1;
            this._transparentLastIndex = - 1;
        }

        push(object, geometry, material, z, group) {

            let array, index;

            // allocate the next position in the appropriate array

            if ( material.transparent ) {

                array = this.transparent;
                index = ++ this._transparentLastIndex;

            } else {

                array = this.opaque;
                index = ++ this._opaqueLastIndex;

            }

            // recycle existing render item or grow the array

            let renderItem = array[ index ];

            if ( renderItem ) {

                renderItem.id = object.id;
                renderItem.object = object;
                renderItem.geometry = geometry;
                renderItem.material = material;
                renderItem.program = material.program;
                renderItem.renderOrder = object.renderOrder;
                renderItem.z = z;
                renderItem.group = group;

            } else {

                renderItem = {
                    id: object.id,
                    object: object,
                    geometry: geometry,
                    material: material,
                    program: material.program,
                    renderOrder: object.renderOrder,
                    z: z,
                    group: group
                };

                // assert( index === array.length );
                array.push( renderItem );

            }
        }

        finish() {
            this.opaque.length = this._opaqueLastIndex + 1;
            this.transparent.length = this._transparentLastIndex + 1;

        }

        sort() {

            this.opaque.sort( WebGLRenderList._painterSortStable );
            this.transparent.sort( WebGLRenderList._reversePainterSortStable );

        }

        static _painterSortStable( a, b ) {

            if ( a.renderOrder !== b.renderOrder ) {

                return a.renderOrder - b.renderOrder;

            } else if ( a.program && b.program && a.program !== b.program ) {

                return a.program.id - b.program.id;

            } else if ( a.material.id !== b.material.id ) {

                return a.material.id - b.material.id;

            } else if ( a.z !== b.z ) {

                return a.z - b.z;

            } else {

                return a.id - b.id;

            }

        }

        static _reversePainterSortStable( a, b ) {

            if ( a.renderOrder !== b.renderOrder ) {

                return a.renderOrder - b.renderOrder;

            } if ( a.z !== b.z ) {

                return b.z - a.z;

            } else {

                return a.id - b.id;

            }

        }

    }

    class WebGLRenderLists {

        constructor() {

            this.lists = {};

        }

        get(scene, camera) {

            var hash = scene.id + ',' + camera.id;
            var list = this.lists[ hash ];

            if ( list === undefined ) {

                // console.log( 'THREE.WebGLRenderLists:', hash );

                list = new WebGLRenderList();
                this.lists[ hash ] = list;

            }

            return list;
        }

        dispose() {

            this.lists = {};

        }

    }

    Bonnie3D.WebGLRenderList = WebGLRenderList;
    Bonnie3D.WebGLRenderLists = WebGLRenderLists;

}(this));