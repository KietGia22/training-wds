const {bookService} = require('../services/index')
const {StatusCodes} = require('http-status-codes')

const getAll = async(req, res, next) => {
    const { books } = await bookService.getAllBooks();

    res.status(StatusCodes.OK).json(books);
}

const getBook = async(req, res, next) => {
    const {id: bookId} = req.params;

    const { book } = await bookService.getBookById(bookId);

    res.status(StatusCodes.OK).json(book);
}

const addBook = async(req, res, next) => {
    const body = req.body;

    const { newBook } = await bookService.createBook(body);

    res.status(StatusCodes.OK).json(newBook);
}

module.exports = {
    getAll,
    getBook,
    addBook
}