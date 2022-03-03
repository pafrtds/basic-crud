const { mongoDb } = require("../utils/initialize_mongodb");

const itemSchema = new mongoDb.Schema({
    name: String,
    category: String,
    price: Number,
    isActive: Boolean
},{collection: 'items'})

module.exports = itemSchema