const express = require("express");
const router = express.Router();
const {bookController} = require('../controllers/index')

router.route('/')
      .get(bookController.getAll)
      .post(bookController.addBook)

router.route('/:id')
      .get(bookController.getBook)

module.exports = router;