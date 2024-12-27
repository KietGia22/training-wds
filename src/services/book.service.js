const { model } = require('mongoose')
const models = require('../models/index')

const getAllBooks = async() => {
    try {
        const books = await models.bookModel.find({})
        return {books}
    } catch (err) {
        throw err
    }
}

module.exports = {
    getAllBooks
}