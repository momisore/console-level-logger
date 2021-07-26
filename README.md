# console-level-logger

## Simple logger for Nodejs

A simple lightweight logger that provides a wrapper for inbuilt NodeJS Console Module and provides a means of setting log levels to constrol logging verbosity.
The logger supports common logging methods that are exposed by the Console module, including INFO, WARN, DEBUG, ERROR. 

## Feature

The module currently supports 4 different log levels; INFO, WARN, DEBUG and ERROR).  Selected log level determines what gets logged to the console. For example, setting the the log level as error means that all other log types are ignored, including debug, warning and info.

**Error:** Logs only error messages

**DEBUG:** Logs errors and debug messages.

**WARN:** Logs error, debug and warning messages

**INFO:**  logs all info, warning, debug and error messages

## Install
``` npm install console-level-logger ```


## Usage
```
const Logger = require("./simple-nodejs-logger")

var logger = new Logger()

logger.setLevel("debug")  // log only error and debug messages

logger.log("this is a LOG message") // ignored
logger.info("this is an INFO message") // ignored
logger.warn("this is a WARNING message")  // ignored
logger.debug("this is a DEBUG message") // logged
logger.error("this is an ERROR message") // logged

// Note that INFO is the default level, it is used if no levels are set

```

