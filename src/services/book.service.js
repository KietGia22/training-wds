const {bookModel} = require('../models/index')

const getAllBooks = async() => {
    const books = await  bookModel.find({});

    return { books };
}

const getBookById = async(bookId) => {
    const book = await bookModel.findById(bookId);

    return { book };
}

const createBook = async(body) => {
    const newBook = await bookModel.create(body);

    return { newBook };
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook
}