(function ($) {

    class Cache {

        static add(key, file) {

            if ( Cache.enabled === false ) return;

            Bonnie3D.Log.debug( '[Cache]', 'Adding key:', key );

            Cache.files[ key ] = file;

        }

        static get(key) {

            if ( Cache.enabled === false ) return;

            Bonnie3D.Log.debug( '[Cache]', 'Checking key:', key );

            return Cache.files[ key ];

        }

        static remove(key) {

            delete Cache.files[ key ];

        }

        static clear() {

            Cache.files = {};

        }
    }

    Cache.enabled = false;
    Cache.files = {};

    Bonnie3D.Cache = Cache;

}(this));
