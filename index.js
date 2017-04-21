const path = require('path');
const ParseFileModule = require('./libs/parseFile');

ParseFileModule.ParseFile({
    configFile: path.resolve('./config.json'),
    in: './app/download.html',
    out: './dist'
})