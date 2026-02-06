const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');

const dollsRoutes = require('./api/routes/dolls')
const candlesRoutes = require('./api/routes/candles')




app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
    });
    next();
});

app.use(express.json())

// app.use(cookieSession({
//     secret: config.cookieSecret,
//     overwrite: true,
//     signed: true
// }))

app.use(
    cors({
        origin: config.clientUrl,
        credentials: true,
        }
    )
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    config.isDev || req.session.connection ? next() : res.status(401).json({})
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/dolls', dollsRoutes)
app.use('/candles', candlesRoutes)




module.exports = app;
