var DuckFeeding = require('../models/duckFeeding');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.duckFeedingRecord_create = function (req, res) {
    
    var duckFeeding = new DuckFeeding({
        feedingDate:        req.body.feedingDate,
        feedingTime:        req.body.feedingTime, 
        foodName:           req.body.foodName,
        feedingLocation:    req.body.feedingLocation,
        numberOfDucks:      req.body.numberOfDucks,
        foodType:           req.body.foodType,
        foodQuantity:       req.body.foodQuantity
    });

    duckFeeding.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('DuckFeeding record created successfully')
    })
};

exports.duckFeedingRecord_results = function (req, res) {
    DuckFeeding.find({}, function (err, results) {
        if (err) return next(err);
        res.send(results);
    })
};

// exports.duckFeedingRecord_details = function (req, res) {
//     DuckFeeding.findById(req.params.id, function (err, results) {
//         if (err) return next(err);
//         res.send(results);
//     })
// };

// exports.duckFeedingRecord_update = function (req, res) {
//     DuckFeeding.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
//         if (err) return next(err);
//         res.send('DuckFeedingRecord udpated.');
//     });
// };

// exports.duckFeedingRecord_delete = function (req, res) {
//     DuckFeeding.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return next(err);
//         res.send('DuckFeedingRecord Deleted successfully!');
//     })
// };