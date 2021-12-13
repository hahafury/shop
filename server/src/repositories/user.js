const db = require('../models');

module.exports.get = predicate => {
    return db.Users.findOne({
        where: predicate,
    });
};

module.exports.create = userData => {
    return db.Users.create({
        ...userData,
        role: 'USER'
    });
};

module.exports.update = (updatedData, predicate) => {
    return db.Users.update(updatedData, {
        where: predicate
    });
};