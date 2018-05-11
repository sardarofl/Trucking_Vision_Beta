const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Fetch = require('../models/fetch');


//fetch
router.get('/fetch_categories',function(req,res){
	Fetch.getAllCategories(function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find category'});
				 res.json(callback);
     });
});

router.get('/fetch_websites',function(req,res){
	Fetch.getAllWebsites(function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find websites'});
				 res.json(callback);
     });
});

router.get('/fetch_website_by_ID/:id',function(req,res){
	var websiteID = req.params.id;
	Fetch.getWebsiteByID(websiteID,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find website'});
				 res.json(callback);
     });
});


router.get('/fetch_products/:category',function(req,res){
	var category = req.params.category;
	Fetch.getProductsByCategory(category, function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find product'});
				 res.json(callback);
     });
});

// router.get('/fetch_products',function(req,res){
// 	Fetch.getAllProducts(function(err,rows){
// 		if(err) return res.json(err);
// 				 res.json(rows);
//      });
// });

// router.get('/fetch_products_media',function(req,res){
// 	Fetch.getAllProductMedia(function(err,rows){
//          if(err) return res.json(err);
//               res.json(rows);
//     });
// });

router.get('/fetch_products_media_byID_Allgallery/:id',function(req,res){
	var id = req.params.id;
	Fetch.getAllProductMedia_AllGallery(id,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find product'});
				 res.json(callback);
     });
});

router.get('/fetch_products_media_byID_gallery/:id',function(req,res){
	var id = req.params.id;
	Fetch.getAllProductMedia_Gallery(id,function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find product'});
				 res.json(callback);
     });
});

router.get('/fetch_products_media_byID_youtube/:id',function(req,res){
	var id = req.params.id;
	Fetch.getAllProductMedia_Youtube(id,function(err,rows){
		if(err) return res.json(err);
				 res.json(rows);
     });
});

module.exports = router;
