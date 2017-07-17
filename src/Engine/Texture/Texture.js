(function ($) {

    class Texture extends Bonnie3D.Object {

        constructor(image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding) {

            super();

            this._id = Bonnie3D.Texture.textureId++;
            this._image = image !== undefined ? image : Texture.DEFAULT_IMAGE;
            this._mipmaps = [];

            this._mapping = mapping !== undefined ? mapping : Texture.DEFAULT_MAPPING;

            this._wrapS = wrapS !== undefined ? wrapS : Bonnie3D.ClampToEdgeWrapping;
            this._wrapT = wrapT !== undefined ? wrapT : Bonnie3D.ClampToEdgeWrapping;

            this._magFilter = magFilter !== undefined ? magFilter : Bonnie3D.LinearFilter;
            this._minFilter = minFilter !== undefined ? minFilter : Bonnie3D.LinearMipMapLinearFilter;

            this._anisotropy = anisotropy !== undefined ? anisotropy : 1;

            this._format = format !== undefined ? format : Bonnie3D.RGBAFormat;
            this._type = type !== undefined ? type : Bonnie3D.UnsignedByteType;

            this._offset = new Bonnie3D.Vector2(0, 0);
            this._repeat = new Bonnie3D.Vector2(1, 1);

            this._generateMipmaps = true;
            this._premultiplyAlpha = false;
            this._flipY = true;
            this._unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

            // Values of encoding !== B3D.LinearEncoding only supported on map, envMap and emissiveMap.
            //
            // Also changing the encoding after already used by a Material will not automatically make the Material
            // update.  You need to explicitly call Material.needsUpdate to trigger it to recompile.
            this._encoding = encoding !== undefined ? encoding : Bonnie3D.LinearEncoding;

            this._version = 0;
            this._onUpdate = null;
        }

        get image() {
            return this._image;
        }

        set image(img) {
            this._image = img;
        }
    }

    Texture.textureId = 0;
    Texture.DEFAULT_IMAGE = undefined;
    Texture.DEFAULT_MAPPING = Bonnie3D.UVMapping;

    Bonnie3D.Texture = Texture;

}(this));
