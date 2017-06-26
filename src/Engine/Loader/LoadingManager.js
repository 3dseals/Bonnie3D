(function ($) {

    class LoadingManager {

        static getInstance() {

            if (!LoadingManager._instance) {

                LoadingManager._instance = new LoadingManager();

            }

            return LoadingManager._instance;

        }

    }

    Bonnie3D.LoadingManager = LoadingManager;

}(this));
