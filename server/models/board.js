var mongoose = require('mongoose')

var ReviewSchema = new mongoose.Schema({
    customer: { type: String, required: [true, "Customer is a required field"], minlength: [3, "Customer is too short"]},
    stars: { type: Number, required: [true, "Raiting is a required field"], min:[1, "Rating can't be lower than 1"], max:[5, "Number can't be higher thatn 5"]},
    description: { type: String, required: [true, "Description is a required field"], minlength: [3, "Description is too short"]}
   },{timestamps:true});
   mongoose.model('Review', ReviewSchema);
   var Review = mongoose.model('Review');

var RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is a required field"], minlength: [3, "Name of restaurant is too short"]},
    cuisine: { type: String, required: [true, "Cuisine is a required field"], minlength: [3, "Cuisine is too short"]},
    review: [ReviewSchema]
   },{timestamps:true});
   mongoose.model('Restaurant', RestaurantSchema);
   var Restaurant = mongoose.model('Restaurant');
