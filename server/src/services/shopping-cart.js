const shoppingCartRepository = require('../repositories/shopping-cart');
const smartphonesRepository = require('../repositories/smartphones');

module.exports.add = async (smartphoneData, userId) => {
    const smartphone = await shoppingCartRepository.getOne(smartphoneData.id, userId);

    if (smartphone) {
        const [updatedRows, updatedItem] = await shoppingCartRepository.update({
            amount: smartphone.amount + smartphoneData.amount,
        }, {
            smartphoneId: smartphoneData.id,
            userId: userId
        });
        return updatedItem;
    } else {
        const addedItem = await shoppingCartRepository.add(smartphoneData, userId);
        const addedItemInfo = await smartphonesRepository.get(addedItem.smartphoneId);

        addedItem.dataValues.Smartphone = addedItemInfo.dataValues;
        
        return addedItem;
    };
};
  