/**
 * @param {string} link .
 * @param {function} callback .
 */
export function load(link, callback) {
	var file = new XMLHttpRequest();
	file.open('GET', link, true);
	file.onreadystatechange = function () {
		if (file.readyState === 4) {
			// Makes sure the document is ready to parse
			if (file.status === 200) {
				// Makes sure it's found the file
				callback(file.responseText);
			}
		}
	};
	file.send(null);
}
