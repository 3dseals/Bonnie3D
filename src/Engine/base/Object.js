(function ($) {

    class Object {

        constructor(name) {

            this._uuid = Bonnie3D.Math.generateUUID();
            this._name = name || "";

        }

        get name() {

            return this._name;

        }

        toJSON(meta) {

            // meta is '' when called from JSON.stringify
            let isRootObject = ( meta === undefined || meta === '' );

            let output = {};

            // meta is a hash used to collect geometries, materials.
            // not providing it implies that this is the root object
            // being serialized.
            if ( isRootObject ) {

                // initialize meta obj
                meta = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {}
                };

                output.metadata = {
                    version: 4.5,
                    type: 'Object',
                    generator: 'Object.toJSON'
                };

            }

            // standard Object3D serialization

            let object = {};

            object.uuid = this._uuid;

            if ( this.name !== '' ) object.name = this._name;

            output.object = object;

            return output;

        }

    }

    Bonnie3D.Object = Object;

}(this));
