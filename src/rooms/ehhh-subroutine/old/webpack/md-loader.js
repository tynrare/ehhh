const remark = require('remark');
const html = require('remark-html');

module.exports = function (content) {
	let text = content;
	remark()
		.use(html)
		.process(content, function (err, file) {
			text = String(file);
		});

	return `module.exports = \`${text}\``;
};
