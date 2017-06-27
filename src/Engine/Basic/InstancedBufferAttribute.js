(function ($) {

    class InstancedBufferAttribute extends Bonnie3D.BufferAttribute {

        constructor(array, itemSize, meshPerAttribute, arrayType) {

            super(array, itemSize, false, arrayType);

            this._meshPerAttribute = meshPerAttribute || 1;

        }
    }

    Bonnie3D.InstancedBufferAttribute = InstancedBufferAttribute;

}(this));