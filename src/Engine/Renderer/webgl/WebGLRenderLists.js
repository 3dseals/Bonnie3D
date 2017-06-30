(function ($) {

    class WebGLRenderList {

        constructor() {

            this.opaque = [];
            this.transparent = [];

        }

        init() {

        }

        finish() {

        }

        sort() {

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