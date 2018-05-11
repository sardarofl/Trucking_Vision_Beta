const mongoose = require('mongoose');

//User schema
const ProductSchema = mongoose.Schema({
  product_name:{
    type:String
  },
  categorie:{
    type:String
  },
  description:{
    type:String
  },
  image:{
    type:String
  },
  image_path:{
    type:String
  }
});


module.exports = mongoose.model('Product', ProductSchema);
