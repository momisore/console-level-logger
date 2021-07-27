# console-level-logger

## Simple logger for Nodejs

A simple lightweight logger that serves as a wrapper for the inbuilt NodeJS `Console` Module. It provides a means of setting log levels to control logging verbosity.
 

## Features
___

The module currently supports the 4 common log levels; `INFO/LOG`, `WARN`, `DEBUG` and `ERROR`.  Selected log level determines what gets logged to the console. For example, setting the the log level as `ERROR` means that all other log types are ignored, including debug, warning and info.


### Log Levels with their respective verbosities
___

**`ERROR:`** Logs only error messages

**`DEBUG:`** Logs errors and debug messages.

**`WARN:`** Logs error, debug and warning messages

**`INFO:`**  logs all info, warning, debug and error messages. This is used as the default  whenever a log level is not set.


## Install
___
``` npm install console-level-logger ```


## Usage
___
```
const Logger = require("./simple-nodejs-logger")

var logger = new Logger()

logger.setLevel("debug")  // log only error and debug messages

logger.log("this is a LOG message") // ignored
logger.info("this is an INFO message") // ignored
logger.warn("this is a WARNING message")  // ignored
logger.debug("this is a DEBUG message") // logged
logger.error("this is an ERROR message") // logged

// pass multiple arguments and using interpolations

logger.error("this is an ERROR message with multiple arguments", `${1==1}`, 'arg3')
let newVal = "newValue"
logger.error("this is a msg to log", "log2", `${newVal}` )

// Note that INFO is the default level, it is used if no levels are set

```

Pass to another imported function
```

// in the parent module

anotherModule = require('another-module')
anotherModule.loggingModule(logger)

// in another-module.js

module.exports = {
    loggingModule: function module2(logger){
        ....
        logger.error("log error")
        ....
    }
    ...
    }

```

Like the inbuilt `Console` module, `console-level-logger` accepts variable arguments:

```
logger.info("arg1", "arg2", "arg3")
```

  

