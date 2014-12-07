module.exports = {
	connect: function() {
		var currDomain = window.location.host;
		var socket = io.connect(currDomain);
	}
}; 