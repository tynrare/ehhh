/**
 * @file index.js
 *
 * @author tynrare
 * @version 2
 * @module Rooms
 */
/* eslint-disable global-require, camelcase, max-len, max-statements */

// #draft scope
import cgn from '@core/core_namespace.js';

import { Thingy } from '@core/exchange/index.js';

const cases = {
	Hilo3d: require('./hilo3d/room.js'),
	EhhhBoard: require('./ehhh-board/room.js'),
	ArtGuidelines: require('./sketches/art_guidelines/app.js'),
	Sandbox: require('./sketches/sandbox/app.js'),
	//ModularWindowTest: require('@test/manual/modular_window.mtest.js'),
	//AppThingyMinimalTest: require('@test/manual/app_thingy_minimal.mtest.js'),
	//HiloLineDrawTest: require('@test/manual/hilo_line_draw.mtest.js'),
	//Math3dTest: require('./math/math3d.js'),
	//HiloNormalsMeshDebugTest: require('@test/manual/hilo_normals_debug_draw.mtest.js'),
	//HiloRayNormalTest: require('@test/manual/hilo_ray_normal.mtest.js'),
	//MeshGraphGeomentryTest: require('@test/manual/mesh_graph_geomentry.mtest.js'),
	//MeshGraphMathCase1: require('@test/manual/mesh_graph_math_case_1.mtest.js'),
	//MeshGraphMathCase2: require('@test/manual/mesh_graph_math_case_2.mtest.js'),
	//MeshGraphMathCase3: require('@test/manual/mesh_graph_math_case_3.mtest.js'),
	//MeshGraphMathCase4: require('@test/manual/mesh_graph_math_case_4.mtest.js'),
	//MeshGraphMathSandbox: require('@test/manual/mesh_graph_math_case_x.mtest.js'),
	//PaperioPointsCase1: require('@test/manual/paperio_points_case_1.mtest.js'),
	//PaperioPointsCase2: require('@test/manual/paperio_points_case_2.mtest.js'),
	//PaperioPointsCase3: require('@test/manual/paperio_points_case_3.mtest.js'),
	//HiloMinimalShaderTest: require('@test/manual/hilo_minimal_shader.mtest.js'),
	//PaperioDrawCase1: require('@test/manual/paperio_draw_case_1.mtest.js'),
	//PaperioGameCase1: require('@test/manual/paperio_game_case_1.mtest.js')
};

/**
 * Class to run manual tests
 */
class RoomsSubroutine extends Thingy {
	/**
	 * .
	 */
	initCallback() {
		this.listenHash();
		window.onhashchange = this.listenHash.bind(this);
	}

	/**
	 * #draft
	 */
	listenHash() {
		const urlParams = new URLSearchParams(window.location.search);
		const h = window.location.hash.substr(1);

		this.del('active');
		document.getElementById('ehhh-app-content-root').innerHTML = '';

		if (h.length > 0) {
			document.getElementById('dev-subroutine-commands').style.display = 'none';

			const Case = cases[h].default;

			this.set('active', new Case());
		} else {
			document.getElementById('dev-subroutine-commands').style.display = 'unset';
		}
	}
}

window.cgn = cgn;

const instance = new RoomsSubroutine();
instance.init();
