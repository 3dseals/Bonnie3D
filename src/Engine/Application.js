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
        console.log("_mainLoop");

        if (!this._paused) {
            //do main loop

            if(this._intervalId)
                window.cancelAnimationFrame(this._intervalId);
            this._intervalId = window.requestAnimFrame(this._mainLoop());
        }
    }

    _stopLoop() {
        if (this._intervalId) {
            window.cancelAnimationFrame(this._intervalId);
        }
    }

    static run() {
        if(Application.isPlaying) {
            Application.getInstance().onStart();
            window.requestAnimFrame(Application.getInstance()._mainLoop());
        }
    }

    static exit() {
        if(!Application.isPlaying) {
            Application.getInstance().onStop();
            Application.getInstance()._stopLoop();
        }
    }

    get _isPlaying() {
        return this._paused
    }

    static get isPlaying() {
        return Application.getInstance()._isPlaying;
    }
}