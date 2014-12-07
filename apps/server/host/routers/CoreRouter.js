/*core route is only for clear path routing 
  not impletement biz rule here */
var RootModule = require('.././web_modules/RootModule');

exports.actions = function(app) {
	//app.use(sample());
	app.get('/',RootModule());
	/*app.get('/', function (req, res) {
	  res.render('index',null);
	})*/
};