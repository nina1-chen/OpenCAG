//customer biz rule implement
var ioevent = require('./modules/SocketIoEvent');

ioevent.on('connection', function(socket) {
  console.log('SocketIoEvent connection');
});

