const { url } = require('../config/database')
const mongoose = require('mongoose')
mongoose.connect(url)

module.exports = {
    mongoDb: mongoose
}