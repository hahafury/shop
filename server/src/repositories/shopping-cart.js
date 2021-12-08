const db = require('../models');

module.exports.add = (smartphoneData, userId) => {
    return db.ShoppingCart.create({
        userId: userId,
        smartphoneId: smartphoneData.id,
        amount: smartphoneData.amount
    });
};

module.exports.getOne = (smartphoneId, userId) => {
    return db.ShoppingCart.findOne({
        where: {
            userId: userId,
            smartphoneId: smartphoneId
        }
    });
};

module.exports.update = (data, predicate) => {
    return db.ShoppingCart.update(data, {
        where: predicate,
        returning: true,
        plain: true
    });
};

module.exports.get = predicate => {
    return db.ShoppingCart.findAll({
        where: predicate,
        include: [{
            model: db.Smartphones,
            attributes: [
                'images',
                'brand',
                'model',
                'memory',
                'color',
                'price'
            ],
        }]
    });
};

module.exports.delete = predicate => {
    return db.ShoppingCart.destroy({
        where: predicate
    });
};