const config = require('../config/database');
const mysql = require('mysql');
var path = require('path');
const mongoose = require('mongoose');
const Gallery_schema = require('./gallery_schemas');

//adding items

const Set_Desc_Title={

  Set:function(title, desc, id, res,callback){
    var data = {
      "Data":""
    };

    console.log("SRC "+id);
    //config.query("UPDATE product_media SET title = ?, description = ? WHERE src LIKE'%"+id+"%'", [title,desc], function (err, result) {
    //  if (err) throw err;
    //  res.json(data);
    // });

      Gallery_schema.updateMany(
         { src:id},
         { description: desc,title: title },callback
      );


  }

};


module.exports=Set_Desc_Title;
