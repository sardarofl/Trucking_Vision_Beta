const express = require('express');
const router = express.Router();
const config = require('../config/database');

const Set = require('../models/set');

//add category
router.post('/set_desc_title',function(req,res){
	//var req = req;
	//var res = res;
	console.log("description is "+req.body.description);
	var title = req.body.title;
	var desc = req.body.description;
	var id = req.body.id;
	Set.Set(title, desc, id, res,function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});

module.exports = router;
