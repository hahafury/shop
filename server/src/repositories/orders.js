const db = require('../models');
const CONSTANTS = require('../constants/index');
const moment = require('moment');

module.exports.create = (orderData, userData, transaction) => {
    return db.Orders.create({
        ...orderData,
        status: 'new',
        createdAt: moment().format('HH:mm:ss DD-MM-YYYY'),
        userId: userData.id
    }, transaction);
};

module.exports.getAll = (userId, id) => {
    const where = userId ? {
        userId: userId,
    } : (id ? { id: id } : null)

    return db.Orders.findAll({
        where,
        include: {
            model: db.Smartphones
        },
        order: [['id', 'desc']]
    });
};

module.exports.get = predicate => {
    return db.Orders.findOne({
        where: predicate,
        include: {
            model: db.Smartphones,
            through: {
                model: db.OrdersSmartphones
            }
        }
    });
};

module.exports.update = (predicate, data) => {
    return db.Orders.update(data, {
        where: predicate,
        returning: true,
        plain: true
    });
};

