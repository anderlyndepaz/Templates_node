const contactController = require('../controllers/contact.controller');
const router = require('express').Router();

// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
router.get("/", contactController.getContact);


module.exports = router;