const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: [true, 'Please provide name'],
        minLength: 3,
        maxLength: 100,
    },
    price: {
        type: String,
        required: [true, 'Please provide price'],
        minLength: 4
    },
    author: {
        type: String,
        required: [true, 'Please provide author'],
        minLength: 3,
        maxLength: 100,
    },
    image: {
        type: String,
    }
})


module.exports = mongoose.model("Book", bookSchema);