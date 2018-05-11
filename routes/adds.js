const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Add = require('../models/add');
const passport = require('passport');
const jwt = require('jsonwebtoken');



//add category
router.post('/add_category',function(req,res){
	var req = req;
	var res = res;

	  Add.AddToCategories(req,res, (err, category) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to Add category'});
	    }else{
	     res.json({success:true, msg:'Category Added'});
	    }
	  });
});

/////////add product image and data
router.post('/add_product',function(req,res){
	var req = req;
	var res = res;
	Add.AddToProducts(req, res, function(err,rows){
		if(err){
		 res.json({success:false, msg:'Failed to Add Product'});
		}else{
		 res.json({success:true, msg:'Product Added'});
		}
    });
});

//add multiple images for gallerys
router.post('/add_gallery',function(req,res){
		console.log("adding to gallery "+req);
	var req = req;
	var res = res;
	Add.AddToGallery(req, res, function(err,rows){
		if(err){
		 res.json({success:false, msg:'Failed to Add Image'});
		}else{
		 res.json({success:true, msg:'Image Added'});
		}
     });
});

//add videos
router.post('/add_video',function(req,res){
	var req = req;
	var res = res;
	Add.AddVideoToGallery(req, res, function(err,rows){
		if(err){
		 res.json({success:false, msg:'Failed to Add Image'});
		}else{
		 res.json({success:true, msg:'Image Added'});
		}
		 });
});

//add videos
router.post('/add_website',function(req,res){
	var req = req;
	var res = res;
	Add.AddWebsite(req, res, function(err,rows){
		if(err){
		 res.json({success:false, msg:'Failed to Add Website'});
		}else{
		 res.json({success:true, msg:'Website Added'});
		}
		 });
});

module.exports = router;
