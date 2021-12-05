const TokenError = require('../errors/token-error');
const ServerError = require('../errors/server-error');
const shoppingCartRepository = require('../repositories/shopping-cart-repository');

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
        return shoppingCartRepository.add(smartphoneData, userId);
    };
};
  