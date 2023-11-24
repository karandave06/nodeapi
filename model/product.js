
const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
    title: {type:String,  unique: true},
    description: String,
    price: {type:Number,min:[0, 'wrong min price'],max:[5000000,'wrong max price']},
    discountPercentage:  {type:Number,min:[0, 'wrong min discount'],max:[500000,'wrong max discount']},
    rating: {type:Number,min:[0, 'wrong min ratiing'],max:[10,'wrong max rating']},
    stock:  {type:Number,min:[0, 'wrong min stock'],max:[10,'wrong max stock']},
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
  });
  
  
  exports.Product = mongoose.model('Product', productSchema);
  
  
  