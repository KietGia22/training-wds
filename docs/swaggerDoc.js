const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "Documentation for Express API",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpecs;
