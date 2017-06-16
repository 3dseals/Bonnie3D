(function ($) {

    class Log {

        static info(...args) {
            console.info("INFO: " + new Bonnie3D.StringFormat(...args));
        }

        static debug(...args) {
            if(Log.level)console.log("DEBUG: " + new Bonnie3D.StringFormat(...args));
        }

        static warning(...args) {
            console.warn("WARNING: " + new Bonnie3D.StringFormat(...args));
        }

        static error(...args) {
            console.error("ERROR: " + new Bonnie3D.StringFormat(...args));
        }

        static alert(...args) {
            console.log("ALERT: " + new Bonnie3D.StringFormat(...args));
            alert("ALERT: " + new Bonnie3D.StringFormat(...args));
        }

        static trace(...args) {
            console.trace("TRACE: " + new Bonnie3D.StringFormat(...args));
        }

        static assert(condition, ...args) {
            if (condition === false) {
                console.trace("ASSERT: " + new Bonnie3D.StringFormat(...args));
            }
        }

        static get level() {
            return Log._level?Log._level:Log.INFO;
        }

        static set level(l) {
            Log._level = l
        }
    }

    Log.INFO = 0;
    Log.DEBUG = 1;

    Bonnie3D.Log = Log;

}(this));