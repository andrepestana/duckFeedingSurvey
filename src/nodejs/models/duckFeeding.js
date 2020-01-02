var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DuckFeedingSchema = new Schema({
    
    feedingDate: {type: Date, required: true},
    feedingTime: {type: Date, required: true},
    foodName: {type: String, required: true, min: 3, max: 30},
    feedingLocation: {type: String, required: true, min: 1, max: 30},
    numberOfDucks: {type: Number, required: true, min: 1},
    foodType: {type: String, required: true, min: 3, max: 30},
    foodQuantity: {type: Number, required: true}
});


// Export the model
module.exports = mongoose.model('DuckFeeding', DuckFeedingSchema);