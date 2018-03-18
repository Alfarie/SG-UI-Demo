var config = require('../../models/config');
var fs = require('fs');
var dir = require('../../models/config').root;
var man = fs.readFileSync(__dirname + '/man.txt').toString();


var argProcess = function(arg){
    if(arg.startsWith("--SerialPort")){
        let port = arg.split("=")[1];
        config.portName = port;
    }

    else if(arg.startsWith("--Production")){
        config.production = true;
    }

    else if(arg.startsWith("--man")){
        console.log(man);
        return false;
    }

    return true;
}


module.exports = {
    argProcess: argProcess
}


