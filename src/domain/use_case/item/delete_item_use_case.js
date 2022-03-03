const { destroyItem } = require("../../../infrastructure/repositories/item_repositories")

module.exports = async function deleteItemUseCase({id}) {
    return await destroyItem(id)
}