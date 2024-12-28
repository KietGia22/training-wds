const {bookService} = require('../services/index')
const {StatusCodes} = require('http-status-codes')

const getAll = async(req, res, next) => {
    try {
        const { books } = await bookService.getAllBooks();

        res.success(books, StatusCodes.OK)
    } catch (err) {
        next(err)
    }
}

const getBook = async(req, res, next) => {
    try {
        const {id: bookId} = req.params;

        const { book } = await bookService.getBookById(bookId);

        res.success(book, StatusCodes.OK)
    } catch (err) {
        next(err);
    }
}

const addBook = async(req, res, next) => {
    try {
        const body = req.body;

        const { newBook } = await bookService.createBook(body);

        res.success(newBook, StatusCodes.CREATED);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAll,
    getBook,
    addBook
}