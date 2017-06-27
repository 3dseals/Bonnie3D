(function ($) {

    class LoadingManager {

        constructor(onLoad, onProgress, onError) {

            this._isLoading = false;
            this._itemsLoaded = 0;
            this._itemsTotal = 0;

            this._onStart = undefined;
            this._onLoad = onLoad;
            this._onProgress = onProgress;
            this._onError = onError;

        }

        static getInstance() {

            if (!LoadingManager._instance) {

                LoadingManager._instance = new LoadingManager();

            }

            return LoadingManager._instance;

        }

        itemStart(url) {

            this._itemsTotal ++;

            if ( this._isLoading === false ) {

                if ( this._onStart !== undefined ) {

                    this._onStart( url, this._itemsLoaded, this._itemsTotal );

                }

            }

            this._isLoading = true;

        }

        itemEnd(url) {

            this._itemsLoaded ++;

            if ( this._onProgress !== undefined ) {

                this._onProgress( url, this._itemsLoaded, this._itemsTotal );

            }

            if ( this._itemsLoaded === this._itemsTotal ) {

                this._isLoading = false;

                if ( this._onLoad !== undefined ) {

                    this._onLoad();

                }

            }

        }

        itemError(url) {

            if ( this._onError !== undefined ) {

                this._onError( url );

            }

        }

    }

    Bonnie3D.LoadingManager = LoadingManager;

}(this));
