(function ($) {

    class CubeTexture extends Bonnie3D.Texture {

        constructor(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding) {

            super(images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding);

            this.images = images !== undefined ? images : [];
            this.mapping = mapping !== undefined ? mapping : Bonnie3D.CubeReflectionMapping;

            this.flipY = false;

        }

    }

    Bonnie3D.CubeTexture = CubeTexture;

}(this));
