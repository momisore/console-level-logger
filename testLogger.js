const Logger = require("./logger")

var logger = new Logger()
logger.setLevel("error")


logger.log("this is a LOG message")
logger.info("this is an INFO message")
logger.warn("this is a WARNING message")
logger.debug("this is a DEBUG message")
logger.error("this is an ERROR2 message")
