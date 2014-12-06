/* Declare block Start don't declare outside here*/
var express = require('express')
	, app = express()
	, http = require('http')
	, server = http.createServer(app)
	, router = require('./routers/CoreRouter')
	, socket = require('socket.io')
	, io = socket.listen(server)
	, IoOnConnection = require('./modules/IoOnConnection');	
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
//socket.io
	io.sockets.on('connection',IoOnConnection());
//all express set must with module 
//ex: https://github.com/expressjs/serve-favicon/blob/master/index.js

	server.listen(3000);