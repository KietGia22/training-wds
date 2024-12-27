const service = require('../services/index')
const {statusCodes, StatusCodes} = require('http-status-codes')

const getAll = async(req, res, next) => {
    try {
        const {books} = await service.bookService.getAllBooks()
        res.status(StatusCodes.OK).json(books)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getAll
}