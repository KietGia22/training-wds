const express = require("express");
const router = express.Router();
const {bookController} = require('../controllers/index')

router.get('/', bookController.getAll)

module.exports = router;