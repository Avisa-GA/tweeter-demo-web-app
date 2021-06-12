
const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

db.on('connected', () => console.log('mongo connected'))
db.on('error', (err) => console.log(err.message, ' is mongo connected?'))
db.on('disconnected', () => console.log('mongo disconnected'))