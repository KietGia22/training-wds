const joi = require('joi');

const reqValidate = async (data) => {
    const createBookSchema = joi.object({
        book_name: joi.string(),
        price: joi.number(),
        author: joi.string(),
        image: joi.string(),
    });
    return createBookSchema.validate(data);
}

module.exports = reqValidate;