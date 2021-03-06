(function ($) {

    class SceneManager {
    
        constructor() {

            this._current = null;

        }

        static getInstance() {

            if (!SceneManager._instance) {
                SceneManager._instance = new SceneManager();
            }
            return SceneManager._instance;

        }

        _loadScene(scene) {

            if(this._current) {
                this._current.onExit();
            }
            if(typeof scene === "string") {
                this._current = new Bonnie3D.Scene(scene);
            }else {
                this._current = scene;
            }
            if(this._current) {
                this._current.onEnter();
            }

        }

        static loadScene(scene) {

            SceneManager.getInstance()._loadScene(scene);

        }

        get _currentScene() {

            return this._current;

        }

        static get currentScene() {

            return SceneManager.getInstance()._currentScene;

        }
    }

    Bonnie3D.SceneManager = SceneManager;

}(this));