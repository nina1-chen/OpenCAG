// SocketIO wrapper
var socket = require('socket.io')
	, IoOnConnection = require('../event_modules/IoOnConnection')
	, event = require('./SocketIoEvent')	
	, io;

module.exports = function (server,options){	
	var options = options || {};
	if (!server) throw new TypeError('express server is required');
	io = socket.listen(server);	
	
	io.sockets.on('connection', function(socket) {
		IoOnConnection(socket);
		event.emit('connection',socket);		
	});
	
};  
