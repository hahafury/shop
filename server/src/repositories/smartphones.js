const db = require('../models');

module.exports.getAll = (brand, params) => {
    return db.Smartphones.findAll({
        where: brand,
        attributes: [
            'id',
            'brand', 
            'model',
            'images',
            'rating',
        ]
    });
};

module.exports.maxPrice = (brand, params) => {
    return db.Smartphones.max('price', {
        where: brand
    });
};

module.exports.minPrice = (brand, params) => {
    return db.Smartphones.min('price', {
        where: brand
    });
};

module.exports.get = (smartphoneId) => {
    return db.Smartphones.findOne({
        where: smartphoneId
    });
};

module.exports.create = userData => {
    return db.Users.create({
        login: userData.login,
        password: userData.password,
        email: userData.email,
        phone: userData.phone
    });
};

module.exports.update = (updatedData, predicate) => {
    return db.Users.update(updatedData, {
        where: predicate
    });
};