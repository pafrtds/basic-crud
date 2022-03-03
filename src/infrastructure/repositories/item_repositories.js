const itemSchema = require("../models/Item")
const { mongoDb } = require("../utils/initialize_mongodb")

const Items = mongoDb.model('items', itemSchema, 'items')
const findAllItems = async ({name, category}) => {
    const where = {}
    if(name) where.name = name
    if(category) where.category = category
    return await Items.find(where)
}

const createItem = async (item) => {
    return await Items.create(item)
}

const destroyItem = async (id) => {
    return await Items.deleteOne({_id: id})
}

const updateItem = async (id, fieldsUpdate) => {
    return await Items.updateOne({_id: id}, fieldsUpdate)
}
module.exports = {
    findAllItems,
    createItem,
    destroyItem,
    updateItem
}