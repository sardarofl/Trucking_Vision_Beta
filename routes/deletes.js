const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Delete = require('../models/delete');

//delete category
router.delete('/delete_category/:id/:category',function(req,res){
	var item = req.params.id;
	var category = req.params.category
	var res = res;
	Delete.DeleteFromCategories(item, category,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});

//delete product
router.delete('/delete_product/:id',function(req,res){
	var item = req.params.id;
	Delete.DeleteFromProducts(item,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});

//delete from gallery
router.delete('/delete_from_gallery/:id',function(req,res){
	var item = req.params.id;
	Delete.DeleteFromGallery(item,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});

//delete from websites
router.delete('/delete_from_website/:id',function(req,res){
	var item = req.params.id;
	console.log("url is: "+item);
	Delete.DeleteFromWebsite(item,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});



module.exports = router;
