module.exports = function (options){	
	var options = options || {};
	
	return function (req, res, next){		
		console.log(req.url);
		if (req.url === "/")
			res.render('index',null);
		else
			res.write("other");
			
		res.end();
		return next();  
	} 
};  