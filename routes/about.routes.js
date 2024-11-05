const aboutController = require('../controllers/about.controller');
const router = require('express').Router();

// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
router.get("/", aboutController.getAbout);


module.exports = router;