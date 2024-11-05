const locationController = require('../controllers/location.controller');
const router = require('express').Router();

// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
router.get("/", locationController.getLocation);


module.exports = router;