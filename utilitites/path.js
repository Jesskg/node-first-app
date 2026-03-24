const path = require('path');

module.exports = path.dirname(process.mainModule.filename); //returns the directory name of the current module's main file, which is the entry point of the application