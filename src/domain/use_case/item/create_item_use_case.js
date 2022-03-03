const { createItem } = require("../../../infrastructure/repositories/item_repositories")

module.exports = async function createItemUseCase({ rawData } = {}) {
    const { name, category, price, isActive } = rawData
    return await createItem({name, category, price, isActive})
}