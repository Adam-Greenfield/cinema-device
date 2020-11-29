var express = require('express');
var router = express.Router();
var showingController = require('../controllers/showingController');

router.route('/')
    /** GET /api/users - Get list of users */
    .get(showingController.index)

    /** POST /api/users - Create new user */
    .post(showingController.create);

router.route('/:bookingId')
    /** GET /api/users/:userId - Get user */
    .get(showingController.get)

    /** PUT /api/users/:userId - Update user */
    .put(showingController.update)

    /** DELETE /api/users/:userId - Delete user */
    .delete(showingController.remove);

/** Load user when API with userId route parameter is hit */
router.param('bookingId', showingController.load);

module.exports = router;
