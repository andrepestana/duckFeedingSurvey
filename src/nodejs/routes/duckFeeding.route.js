var express = require('express');
var router = express.Router();

var duckFeedingControler = require('../controllers/duckFeeding.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', duckFeedingControler.test);

router.post('/create', duckFeedingControler.duckFeedingRecord_create);

router.get('/results', duckFeedingControler.duckFeedingRecord_results);

// router.get('/:id', duckFeedingControler.duckFeedingRecord_details);

// router.put('/:id/update', duckFeedingControler.duckFeedingRecord_update);

// router.delete('/:id/delete', duckFeedingControler.duckFeedingRecord_delete);


module.exports = router;