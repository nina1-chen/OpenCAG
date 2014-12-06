// IO Event : on Connection
var IoOnCommands = require('./IoOnCommands');

module.exports = function (options){	
	var options = options || {};
	
	return function (socket){		
		console.log('connection');
		socket.on('commands',IoOnCommands() );
	} 
};  