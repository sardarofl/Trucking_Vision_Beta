const config = require('../config/database');
const mysql = require('mysql');
var multer  =   require('multer');
var path = require('path');
const mongoose = require('mongoose');
const Category_schema = require('./category_schemas');
const Product_schema = require('./product_schemas');
const Gallery_schema = require('./gallery_schemas');
const Website_schema = require('./website_schemas');

//multer
var filename_path;
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },

  filename: function (req, file, callback) {
    //console.log(req);
    filename_path=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({ storage : storage}).single('image');
var multiple_upload = multer({ storage : storage}).array('image');
var website_upload = multer({ storage : storage}).single('image');
//adding items

const Add_Items={

  AddToCategories:function(req,res, callback){
    upload(req,res,function(err) {
    let newCategory = new Category_schema({
      item:req.body.category,
      file_path:req.file.originalname,
      filename_path:req.file.filename
    });

      newCategory.save( callback, function (err, docs) {
        if (err){
            return console.error(err);
        } else {
          console.log("Multiple documents inserted to Collection");
        }
      });
    });
  },
  AddToProducts:function(req, res, callback){
    upload(req,res,function(err) {
      let newProduct = new Product_schema({
        product_name:req.body.product,
        categorie:req.body.category,
        image:req.file.originalname,
        image_path:req.file.filename
      });

      newProduct.save( callback, function (err, docs) {
        if (err){
            return console.error(err);
        } else {
          console.log("Multiple documents inserted to Collection");
        }
      });

    });
  },
  AddToGallery:function(req, res, callback){

    multiple_upload(req,res,function(err) {
      console.log(req);
      var id=req.body.id;
      var category=req.body.category;
      var org_name=[];
      var file_name=[];

      for(var i=0; i<req.files.length; i++)
      {
        org_name[i] = req.files[i].originalname;
        file_name[i] = req.files[i].filename;
        let newImage = new Gallery_schema({
          id:id,
          href:org_name[i],
          src:file_name[i],
          type:'img',
          title:'',
          description:'',
          category:category
        });

        newImage.save(function (err, docs) {
          if (err){
              return console.error(err);
          } else {
            console.log("Multiple documents inserted to Collection");
          }
        });
      }

        console.log('File uploaded');
        res.end("File is uploaded");

    });

  },
  AddVideoToGallery:function(req, res, callback){
        multiple_upload(req,res,function(err) {
    console.log("adding Video");

    var id = req.body.id;
    var link = req.body.link;
    var desc = req.body.desc;
    var category = req.body.category;
    let newVideo = new Gallery_schema({
      id:id,
      href:link,
      src:link,
      type:'youtube',
      title:desc,
      description:desc,
      category:category
    });

    var data = {
    "Data":""
    };

    newVideo.save(function (err, docs) {
      if (err){
          return console.error(err);
      } else {
        res.json(data);
      }
    });

       });
  },
  AddWebsite:function(req, res, callback){
      website_upload(req,res,function(err) {
    console.log("adding Website");
    console.log(req);
    let newWebsite = new Website_schema({
      Website:req.body.website,
      sitename:req.body.sitename,
      image:req.file.originalname,
      image_path:req.file.filename
    });

    var data = {
    "Data":""
    };

    newWebsite.save(function (err, docs) {
      if (err){
          return console.error(err);
      } else {
        res.json(data);
      }
    });

    });
  }
};


module.exports=Add_Items;
