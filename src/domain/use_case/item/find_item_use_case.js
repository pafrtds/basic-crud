const { findAllItems } = require("../../../infrastructure/repositories/item_repositories")

module.exports = async function findItemUseCase({name, category}){
    return await findAllItems({name, category})
}