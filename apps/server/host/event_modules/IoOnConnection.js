// IO Event : on Connection
var IoOnCommands = require('./IoOnCommands')
	, ioevent = require('../modules/SocketIoEvent');

module.exports = function (socket){	
	console.log('connection');
	if (!socket) throw new TypeError('socket is required');
	
	socket.on('commands',function(data) {
			IoOnCommands(data);
			ioevent.emit('commands',data);		 
	});		
};