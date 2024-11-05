const homeController = require('../controllers/home.controller');
const router = require('express').Router();

// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
router.get("/", homeController.getHome);


module.exports = router;