function getEhhhRootPath() {
	return process.env.EHHH_ROOT ?? process.cwd();
}

module.exports = { getEhhhRootPath };
