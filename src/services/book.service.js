const {bookModel} = require('../models/index')
const customError = require('../errors/index')
const validatation = require('../utils/validation');

const getAllBooks = async() => {
    try {
        const books = await  bookModel.find({});

        return { books };
    } catch (err) {
        throw err;
    }
}

const getBookById = async(bookId) => {
    try {
        const book = await bookModel.findById(bookId);

        if(!book) {
            throw new customError.NotFoundError("Book not found")
        }

        return { book };
    } catch (err) {
        throw err
    }
}

const createBook = async(body) => {
    try {
        const isChecked = await validatation(body)

        console.log(isChecked)
    
        if(isChecked.error) {
            throw new customError.BadRequestError(isChecked.error.message);
        }

        const newBook = await bookModel.create(body);

        return { newBook };
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook
}