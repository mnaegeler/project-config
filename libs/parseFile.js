const fs = require('fs')

function ParseFile (options = {}) {

	const config = require(options.configFile || '../config.json')

	options.filename = options.in.split('/').pop();

	try {
		fs.mkdirSync(options.out || './dist');
	} catch (e) {}

	fs.readFile(options.in, 'utf-8', function (error, fileContent) {
		let pos;

		while (pos = fileContent.match(/\{\{([a-zA-Z0-9\-\.]+)\}\}/)) {
			if (pos) {
				fileContent = fileContent.replace(pos[0], config[pos[1]]);
			}
		}

		fs.writeFileSync(`${options.out}/${options.filename}`, fileContent, { encoding: 'utf8' });
	});

}

module.exports.ParseFile = ParseFile;