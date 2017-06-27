(function ($) {

    class ImageLoader {

        static load(url, onLoad, onError) {

            if ( url === undefined ) url = '';

            if ( ImageLoader.path !== undefined ) url = ImageLoader.path + url;

            let cached = Bonnie3D.Cache.get( url );

            if ( cached !== undefined ) {

                Bonnie3D.LoadingManager.getInstance().itemStart( url );

                setTimeout( function () {

                    if ( onLoad ) onLoad( cached );

                    Bonnie3D.LoadingManager.getInstance().itemEnd( url );

                }, 0 );

                return cached;

            }

            var image = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'img' );

            image.addEventListener( 'load', function () {

                Bonnie3D.Cache.add( url, this );

                if ( onLoad ) onLoad( this );

                Bonnie3D.LoadingManager.getInstance().itemEnd( url );

            }, false );

            image.addEventListener( 'error', function ( event ) {

                if ( onError ) onError( event );

                Bonnie3D.LoadingManager.getInstance().itemEnd( url );
                Bonnie3D.LoadingManager.getInstance().itemError( url );

            }, false );

            if ( url.substr( 0, 5 ) !== 'data:' ) {

                if ( ImageLoader.crossOrigin !== undefined ) image.crossOrigin = ImageLoader.crossOrigin;

            }

            Bonnie3D.LoadingManager.getInstance().itemStart( url );

            image.src = url;

            return image;
        }

    }

    Bonnie3D.ImageLoader = ImageLoader;

}(this));
