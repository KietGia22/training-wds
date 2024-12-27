require('dotenv').config()
require('express-async-errors')
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const Router = require('./src/routes/index');
const connectDB = require('./src/config/mongoConnect');
const {
    error_handler,
    not_found,
    apiResponse
} = require('./src/middlewares/index')

const app = express();

app.set('trust proxy', 1);
app.use(rateLimit({windowMs: 15 * 60 * 1000, max: 100}));

//extra packages
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(morgan('tiny'));
app.use(express.json());

app.use(apiResponse)

app.use('/api/v1', Router)

app.use(not_found)

app.use(error_handler)

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        server.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    } catch (error) {
        console.error(error);
    }
}

start();

