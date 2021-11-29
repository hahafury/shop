const db = require('../models');

module.exports.get = predicate => {
    return db.Smartphones.findAll({
        where: predicate,
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