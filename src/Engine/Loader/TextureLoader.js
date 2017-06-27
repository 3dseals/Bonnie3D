(function ($) {

    class TextureLoader {

        static load(url, onLoad, onProgress, onError) {
            Bonnie3D.ImageLoader.crossOrigin = TextureLoader.crossOrigin ;
            Bonnie3D.ImageLoader.path = TextureLoader.path;

            var texture = new Bonnie3D.Texture();
            texture.image = Bonnie3D.ImageLoader.load( url, function () {

                // JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
                var isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

                texture.format = isJPEG ? Bonnie3D.RGBFormat : Bonnie3D.RGBAFormat;
                texture.needsUpdate = true;

                if ( onLoad !== undefined ) {

                    onLoad( texture );

                }

            }, onProgress, onError );

            return texture;
        }

    }

    Bonnie3D.TextureLoader = TextureLoader;

}(this));
