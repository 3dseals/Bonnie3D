(function ($) {

    class Log {

        static info(...args) {

            console.info("[" + new Date().getTime()+ "] INFO: " + new Bonnie3D.StringFormat(...args));

        }

        static debug(...args) {

            if(Log.level)console.log("[" + new Date().getTime()+ "] DEBUG: " + new Bonnie3D.StringFormat(...args));

        }

        static warning(...args) {

            console.warn("[" + new Date().getTime()+ "] WARNING: " + new Bonnie3D.StringFormat(...args));

        }

        static error(...args) {

            console.error("[" + new Date().getTime()+ "] ERROR: " + new Bonnie3D.StringFormat(...args));

        }

        static alert(...args) {

            console.log("[" + new Date().getTime()+ "] ALERT: " + new Bonnie3D.StringFormat(...args));
            alert("[" + new Date().getTime()+ "] ALERT: " + new Bonnie3D.StringFormat(...args));

        }

        static trace(...args) {

            console.trace("[" + new Date().getTime()+ "] TRACE: " + new Bonnie3D.StringFormat(...args));

        }

        static assert(condition, ...args) {

            if (condition === false) {
                console.trace("[" + new Date().getTime()+ "] ASSERT: " + new Bonnie3D.StringFormat(...args));
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