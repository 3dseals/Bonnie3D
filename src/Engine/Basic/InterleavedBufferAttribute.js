(function ($) {

    class InterleavedBufferAttribute extends Bonnie3D.Object {

        constructor(interleavedBuffer, itemSize, offset, normalized) {

            super();

            this._data = interleavedBuffer;
            this._itemSize = itemSize;
            this._offset = offset;

            this._normalized = normalized === true;

        }
    }

    Bonnie3D.InstancedBufferAttribute = InstancedBufferAttribute;

}(this));