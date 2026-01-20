const http = require('http')
const connectDB = require('./db/mongoConnect')
const app = require('./app')
const config = require('./config')

const server = http.createServer(app);

const startServer = async () => {
    await connectDB()
    server.listen(config.port, '0.0.0.0')
}

startServer()