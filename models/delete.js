const config = require('../config/database');
//const mysql = require('mysql');
var path = require('path');
const mongoose = require('mongoose');
const Category_schema = require('./category_schemas');
const Product_schema = require('./product_schemas');
const Gallery_schema = require('./gallery_schemas');
const Website_schema = require('./website_schemas');

//delete items

const Delete_Items={

  DeleteFromCategories:function(item,category,res, callback){
  var data = {
    "Data":""
  };
  console.log(item);

  Category_schema.remove({_id:item},callback);
  var productquery = Product_schema.find().remove({categorie:category});
  productquery.exec();
  console.log("product id: "+item);
  var galleryquery = Gallery_schema.find().remove({category:category});
  galleryquery.exec();

  },

  DeleteFromProducts:function(item, res, callback){

    var data = {
      "Data":""
    };
    console.log(item);
    Product_schema.remove({_id:item},callback);
    var galleryquery = Gallery_schema.find().remove({id:item});
    galleryquery.exec();

  },
  DeleteFromGallery:function(item, res, callback){
    var data = {
      "Data":""
    };
    Gallery_schema.remove({src:item},callback);


  },
  DeleteFromWebsite:function(item, res, callback){
    var data = {
      "Data":""
    };
    Website_schema.remove({_id:item},callback);


  }

};


module.exports=Delete_Items;
