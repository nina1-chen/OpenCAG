// GET / module

module.exports = function (options){	
	var options = options || {};
	
	return function (req, res){		
		console.log(req.url);		
		res.render('index',null);		
		res.end();
	} 
};  