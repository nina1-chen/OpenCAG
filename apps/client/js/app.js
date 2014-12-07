 /* js application initial */
require('jquery');
var socketio = require('./modules/SocketIO');
	
	/*global opencag, $*/
window.opencag = {
	init: function () {
		socketio.connect();
	}
};

opencag.init();