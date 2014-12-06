/*core route is only for clear path routing 
  not impletement biz rule here */
var sample = require('.././modules/sample')
	,RootModule = require('.././modules/RootModule');

exports.actions = function(app) {
	//app.use(sample());
	app.get('/',RootModule());
	/*app.get('/', function (req, res) {
	  res.render('index',null);
	})*/
};