const db = require('../models');
const Op = db.Sequelize.Op;

module.exports.getAll = (brand, query) => {
    const predicate = Object.keys(query).length !== 0 ? {
        ...brand,
        [Op.and]: {
           color: {
                [Op.or]: query.color.split(',').map(color => ({
                    [Op.like]: color.length > 0 ? color : '%' + color + '%'
                }))
            },
            model: {
                [Op.or]: query.model.split(',').map(model => ({
                    [Op.like]: model.length > 0 ? model : '%' + model + '%'
                }))
            },
            memory: {
                [Op.or]: query.memory.split(',').map(memory => ({
                    [Op.like]: memory.length > 0 ? memory : '%' + memory + '%'
                }))
            }
        }
    } : {
        ...brand
    }

    return db.Smartphones.findAll({
        where: predicate,
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