const Smartphones = require('./Smartphones');

module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            require: true,
        },
        status: {
            type: DataTypes.STRING,
            require: true,
        },
        name: {
            type: DataTypes.STRING,
            require: true,
        },
        surname: {
            type: DataTypes.STRING,
            require: true,
        },
        email: {
            type: DataTypes.STRING,
            require: true,
        },
        phone: {
            type: DataTypes.STRING,
            require: true,
        },
        city: {
            type: DataTypes.STRING,
            require: true,
        },
        delivery: {
            type: DataTypes.STRING,
            require: true,
        },
        postOffice: {
            type: DataTypes.STRING,
            require: true,
        },
        price: {
            type: DataTypes.DOUBLE,
            require: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            require: true,
        }
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'Orders',
        underscored: true,
        tableName: 'orders',
    });
    
    Orders.associate = (models) => {
        Orders.belongsToMany(models.Smartphones, {
            through: models.OrdersSmartphones,
            foreignKey: 'order_id'
        });
    };
    
    return Orders;
};