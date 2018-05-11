const mongoose = require('mongoose');

//User schema
const WebsiteSchema = mongoose.Schema({
  Website:{
    type:String
  },
  sitename:{
    type:String
  },
  image:{
    type:String
  },
  image_path:{
    type:String
  }
});


module.exports = mongoose.model('Website', WebsiteSchema);
