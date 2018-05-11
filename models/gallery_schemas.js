const mongoose = require('mongoose');

//User schema
const GallerySchema = mongoose.Schema({
  id:{
    type:String
  },
  href:{
    type:String
  },
  src:{
    type:String
  },
  type:{
    type:String
  },
  title:{
    type:String
  },
  description:{
    type:String
  },
  category:{
    type:String
  }
});


module.exports = mongoose.model('Gallery', GallerySchema);
