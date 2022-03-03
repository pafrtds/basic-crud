const { updateItem } = require("../../../infrastructure/repositories/item_repositories")

module.exports = async function deleteItemUseCase({id, rawData}) {
    const { name, category, price, isActive } = rawData
    const fieldsUpdate = { name, category, price, isActive}
    return await updateItem(id, fieldsUpdate)
}