class Log {

    static info(...args) {
        console.info("INFO: " + new StringFormat(...args));
    }

    static debug(...args) {
        if(Log.level)console.log("DEBUG: " + new StringFormat(...args));
    }

    static warning(...args) {
        console.warn("WARNING: " + new StringFormat(...args));
    }

    static error(...args) {
        console.error("ERROR: " + new StringFormat(...args));
    }

    static alert(...args) {
        console.log("ALERT: " + new StringFormat(...args));
        alert("ALERT: " + new StringFormat(...args));
    }

    static trace(...args) {
        console.trace("TRACE: " + new StringFormat(...args));
    }

    static assert(condition, ...args) {
        if (condition === false) {
            console.trace("ASSERT: " + new StringFormat(...args));
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