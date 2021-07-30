/* logger class */
/*
Author: Matthias Omisore <stdapsy@yahoo.com>
A simple lightweight logger that provides a wrapper for inbuilt NodeJS Console Module and provides a means of setting log levels to constrol logging verbosity.

Log Levels vs Verbosity:

Log Levels | Verbosity
--------------------------------------------
info       | log, info, warn, debug, and error
warn       | warn, debug, and error
debug      | debug, and error
error      | error

*/



class Logger{
    
    constructor(){
        // constructor
        this.LOG_LEVEL = ["INFO", "WARN", "DEBUG", "ERROR"]
    }

    setLevel(level){

        // set logging levels

       try{
           if(level && typeof(level) == 'string'){
                let strLevel = level.replace(/\s/g, "") // remove whitespacess
                switch(strLevel.toLowerCase()){
                    case 'info':
                        this.LOG_LEVEL = ["LOG", "INFO", "WARN", "DEBUG", "ERROR"]
                        break;
                    case 'warn':
                        this.LOG_LEVEL = ["WARN", "DEBUG", "ERROR"]
                        break;
                    case 'debug':
                        this.LOG_LEVEL = [ "DEBUG", "ERROR"]
                        break;
                    case 'error':
                        this.LOG_LEVEL = ["ERROR"]
                        break;
                    default:
                        throw "Provide only allowed Log levels - INFO, WARN, DEBUG, ERROR"
                }

           }else{
               throw "Provide a comma separated string of log levels e.g 'INFO, WARN, DEBUG, ERROR'"
           }

           
       }catch(e) {
           console.error("Error! invalid Log Level: ", e)
           process.exit(1)
       }
        
    }

  
    error(...msg){
        // error messages
        if(this.LOG_LEVEL.includes("ERROR")){
            console.error(...msg)
        }   
    }
    debug(...msg){
        // debug messages
        if(this.LOG_LEVEL.includes("DEBUG")){
            console.debug(...msg)
        }  
    }

    warn(...msg){
        // log messages
        if(this.LOG_LEVEL.includes("WARN")){
            console.warn(...msg)
        }
    }

    info(...msg){
        // info messages
        if(this.LOG_LEVEL.includes("INFO")){
            console.info(...msg)
        }  
    }
    log(...msg){
        // log messages
        if(this.LOG_LEVEL.includes("LOG")){
            console.log(...msg)
        }  
    }

}

module.exports = Logger