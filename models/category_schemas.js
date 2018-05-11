const mongoose = require('mongoose');

//User schema
const CategorySchema = mongoose.Schema({
  item:{
    type:String
  },
  file_path:{
    type:String
  },
  filename_path:{
    type:String
  }
});


module.exports = mongoose.model('Category', CategorySchema);
