require('dotenv').config({ quiet: true });

const isDev = process.env.DEV || process.env.NODE_ENV === 'development';

module.exports = {
    isDev,
    port: process.env.PORT || 3000,
    clientUrl: isDev ? 'http://localhost:3000' : 'http://fluffy.herokuapp.com',
    mongoUri: isDev 
        ? "mongodb://127.0.0.1:27017/fluffy" 
        : `mongodb+srv://israelbenisti:${process.env.MONGODB_PASS}@cluster0.8zv05oo.mongodb.net/one`,
    cookieSecret: process.env.SECRET
};