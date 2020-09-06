import { Thingy } from '@core/exchange/index.js';
import commands from './COMMANDS.md';
import readme from './README.md';

/**
 * Class to run manual tests
 */
class RoomsSubroutine extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		//window.onhashchange = this.parseHashIntoSearch.bind(this);

		const urlParams = new URLSearchParams(window.location.search);

		document.getElementById('dev-subroutine-commands').style.display = 'none';
		const name = urlParams.get('subroutine');
		
		switch (name) {
			case 'src':
				require('@src/subroutine.js');
				break;
			case 'sketches':
				require('@src/sketches/subroutine.js');
				break;
			case 'rooms':
				require('@src/rooms/subroutine.js');
				break;
			case 'utests':
				require('@src/rooms/utests/subroutine.js');
				break;
			default:
				document.getElementById('dev-subroutine-commands').style.display = 'unset';
				document.getElementById('dev-subroutine-commands').innerHTML = commands;
				document.getElementById('dev-subroutine-commands').innerHTML += readme;
		}
	}

	/**
	 * Все переходы по ссылкам производятся через `href='#arg=x'`, при этом логика работает с ?arg=x аргументами,
	 * таким образом можно использовать любые href в качестве переключателей
	 * #draft
	 *
	 * Replaces all location.hash arguments into search arguments
	 */
	parseHashIntoSearch() {
		const h = window.location.hash.substr(1);
		if (h.length <= 0) {
			return;
		}

		const split = h.split('=');

		const params = new URLSearchParams(window.location.search);
		params.set(split[0], split[1]);

		window.location.search = params.toString();
	}
}

const instance = new RoomsSubroutine();
instance.init();
