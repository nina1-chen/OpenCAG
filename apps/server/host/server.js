/* Declare block Start don't declare outside here*/
var express = require('express')
	, app = express()
	, http = require('http')
	, server = http.createServer(app)
	, router = require('./routers/CoreRouter')
	, socketio = require('./modules/SocketIO');
	
	require('./app.js');
/* Declare block End*/

//app set block	
	app.set('view engine', 'jade');
    app.set('views', __dirname + '/../../template');
	app.use(express['static'](__dirname + '/../../client'));
//app use block	
//initial core router
	router.actions(app);
//Rule : all vendor code please use module request
//       not implement biz rule here
//socket.io initial
	socketio(server);	
//all express set must with module 

	server.listen(3000);