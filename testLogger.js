const Logger = require("./logger")

var logger = new Logger()
logger.setLevel("info")


logger.log("this is a LOG message")
logger.info("this is an INFO message")
logger.warn("this is a WARNING message")
logger.debug("this is a DEBUG message")
logger.error("this is an ERROR message")
logger.error("this is an ERROR message with multiple arguments", `${1==1}`, 'arg3')
// pass an interpolated variable
let newVal = "newValue"
logger.error("this is a msg to log", "log2", `${newVal}` )

