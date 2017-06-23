(function ($) {

    class Application {

        constructor() {

            this._paused = true;
            this._intervalId = 0;

        }

        static getInstance() {

            if (!Application._instance) {

                Application._instance = new Application();

            }

            return Application._instance;

        }

        onStart() {

            this._paused = false;

        }

        onStop() {

            this._paused = true;

        }

        _mainLoop() {

            let callback = function () {

                if (!Application.isPlaying) {

                    //do main loop
                    if(Bonnie3D.SceneManager.currentScene) {

                        let scene = Bonnie3D.SceneManager.currentScene;
                        scene.update();
                        scene.render();

                    }

                    let app = Application.getInstance();

                    if(app._intervalId) {

                        window.cancelAnimationFrame(app._intervalId);

                    }

                    app._intervalId = window.requestAnimationFrame(callback);

                }

            };

            this._intervalId = window.requestAnimationFrame(callback);
        }

        _stopLoop() {

            if (this._intervalId) {

                window.cancelAnimationFrame(this._intervalId);

            }

        }

        static run() {

            if(Application.isPlaying) {

                Application.getInstance().onStart();
                Application.getInstance()._mainLoop();

            }

        }

        static exit() {

            if(!Application.isPlaying) {

                Application.getInstance().onStop();
                Application.getInstance()._stopLoop();

            }

        }

        get _isPlaying() {

            return this._paused;

        }

        static get isPlaying() {

            return Application.getInstance()._isPlaying;

        }

    }

    Bonnie3D.Application = Application;

}(this));