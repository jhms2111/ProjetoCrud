const mongoose = require('mongoose')


function connect() {
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1/ProjetoCrud')

const db = mongoose.connection

db.once('open', () => {
    console.log('connected to database')
})

db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}