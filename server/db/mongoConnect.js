const mongoose = require('mongoose');
const config = require('../config');


async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(config.mongoUri);
    console.log('Mongoose Connected!')
}

module.exports = main