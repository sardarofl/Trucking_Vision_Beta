const config = require('../config/database');
const mysql = require('mysql');
const mongoose = require('mongoose');
const Category_schema = require('./category_schemas');
const Product_schema = require('./product_schemas');
const Gallery_schema = require('./gallery_schemas');
const Website_schema = require('./website_schemas');

const Fetch_Items={
  // getAllCategories:function(callback){
  // return config.query("SELECT * from categories",callback);
  // },
  getAllCategories : function( callback){
    Category_schema.find(callback);
  },
  getAllWebsites : function( callback){
    Website_schema.find(callback);
  },
  getWebsiteByID : function(id, callback){
    Website_schema.find({_id:id},callback);
  },
  getProductsByCategory:function(category,callback){
    Product_schema.find({categorie:category},callback);
  },
  getAllProducts:function(callback){
  return config.query("SELECT * from products",callback);
  },
  getAllProductMedia:function(callback){
  return config.query("SELECT * from product_media",callback);
  },
  getAllProductMedia_Gallery:function(id,callback){
  Gallery_schema.find({id:id,type:'img'},callback);
  },
  getAllProductMedia_Youtube:function(id,callback){
  Gallery_schema.find({id:id,type:'youtube'},callback);
  },
  getAllProductMedia_AllGallery:function(id,callback){
  Gallery_schema.find({id:id},callback);
  },
  getProductMediaByID:function(id,callback){
  return config.query("SELECT * from product_media WHERE id=?",[id],callback);
  }
};


module.exports=Fetch_Items;
