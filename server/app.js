const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const auth = require('./middleware/auth');

const dollsRoutes = require('./api/routes/dolls')
const candlesRoutes = require('./api/routes/candles')
const usersRoutes = require('./api/routes/users')




app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
    });
    next();
});

app.use(express.json())

app.use(
    cors({
        origin: config.clientUrl,
        credentials: true,
        }
    )
)

app.use(bodyParser.urlencoded({ extended: true }))



app.use('/users', usersRoutes)

// Protected Routes
app.use('/dolls', dollsRoutes)
app.use('/candles', candlesRoutes)





module.exports = app;
