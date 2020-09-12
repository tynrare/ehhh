const fs = require('fs');
const path = require('path');

const nunjucks = require('nunjucks');
const remark = require('remark');
const html = require('remark-html');

/**
 * @param {String} path path to md file
 * @returns {Promise<String>} html string
 */
function md(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', function (err, str) {
			if (err) {
				reject(err);
			}

			remark()
				.use(html)
				.process(str, function (err, file) {
					if (err) {
						reject(err);
					}

					resolve(String(file));
				});

			/*
			 //https://github.com/expressjs/express/tree/master/examples/markdown
			var html = marked.parse(str).replace(/\{([^}]+)\}/g, function (_, name) {
				return escapeHtml(options[name] || '');
			});
			*/
		});
	});
}

function MdExtension() {
	this.tags = ['md'];

	this.parse = function (parser, nodes, lexer) {
		// get the tag token
		var tok = parser.nextToken();

		// parse the args and move after the block end. passing true
		// as the second arg is required if there are no parentheses
		var args = parser.parseSignature(null, true);
		parser.advanceAfterBlockEnd(tok.value);

		// parse the body and possibly the error block, which is optional
		var body = parser.parseUntilBlocks('error', 'endmd');
		var errorBody = null;

		if (parser.skipSymbol('error')) {
			parser.skip(lexer.TOKEN_BLOCK_END);
			errorBody = parser.parseUntilBlocks('endmd');
		}

		parser.advanceAfterBlockEnd();

		// See above for notes about CallExtension
		return new nodes.CallExtensionAsync(this, 'run', args, [body, errorBody]);
	};

	this.run = function (context, url, body, errorBody, callback) {
		md(path.join(__dirname, url))
			.then((html) => {
				callback(null, new nunjucks.runtime.SafeString(`<div>${html}</div>`));
			})
			.catch(callback);
	};
}

/**
 * @param {Express} app .
 */
module.exports = function (app) {
	app.set('views', __dirname);
	app.set('view engine', 'njk');

	app.engine('md', function (path, options, fn) {
		md(path)
			.then((html) => {
				fn(null, html);
			})
			.catch(fn);
	});

	const env = nunjucks.configure('views', {
		autoescape: true,
		express: app
	});

	env.addExtension('MdExtension', new MdExtension());
};
