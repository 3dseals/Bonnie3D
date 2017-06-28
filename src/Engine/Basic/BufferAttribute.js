(function ($) {

    class BufferAttribute extends Bonnie3D.Object {

        constructor(array, itemSize, normalized, arrayType) {

            super();

            this._array = arrayType !== undefined ? new arrayType(array): array;
            this._itemSize = itemSize;
            this._count = array !== undefined ? array.length / itemSize : 0;
            this._normalized = normalized === true;

            this._dynamic = false;
            this._updateRange = { offset: 0, count: - 1 };

            this._onUploadCallback = function () {};

        }

        getX (index) {

            return this._array[ index * this._itemSize ];

        }

        setX (index, x) {

            this._array[ index * this._itemSize ] = x;

            return this;

        }

        getY (index) {

            return this._array[ index * this._itemSize + 1 ];

        }

        setY (index, y) {

            this._array[ index * this._itemSize + 1 ] = y;

            return this;

        }

        getZ (index) {

            return this._array[ index * this._itemSize + 2 ];

        }

        setZ(index, z) {

            this._array[ index * this._itemSize + 2 ] = z;

            return this;

        }

        getW(index) {

            return this._array[ index * this._itemSize + 3 ];

        }

        setW(index, w) {

            this._array[ index * this._itemSize + 3 ] = w;

            return this;

        }

        setXYZ (index, x, y, z) {

            index *= this._itemSize;

            this._array[ index + 0 ] = x;
            this._array[ index + 1 ] = y;
            this._array[ index + 2 ] = z;

            return this;

        }
    }

    Bonnie3D.BufferAttribute = BufferAttribute;

}(this));