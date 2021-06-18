const config = require('config.json');
const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI)
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions).then((r) => console.log('connected')).catch((e)=> console.log(e));
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};