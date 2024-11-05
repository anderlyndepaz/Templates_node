const missionController = require('../controllers/mission.controller');
const router = require('express').Router();

// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
router.get("/", missionController.getMission);


module.exports = router;