const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
//custom routes needed


router.route('/')
    /** GET /api/users - Get list of users */
    .get(bookingController.index)

    /** POST /api/users - Create new user */
    .post(bookingController.create);

router.route('/:bookingId')
    /** GET /api/users/:userId - Get user */
    .get(bookingController.get)

    /** PUT /api/users/:userId - Update user */
    .put(bookingController.update)

    /** DELETE /api/users/:userId - Delete user */
    .delete(bookingController.remove);

/** Load user when API with userId route parameter is hit */
router.param('bookingId', bookingController.load);

module.exports = router;
