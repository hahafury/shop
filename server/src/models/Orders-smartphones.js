module.exports = (sequelize, DataTypes) => {
    const OrdersSmartphones = sequelize.define('OrdersSmartphones', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderId: {
            type: DataTypes.INTEGER,
            require: true
        },
        smartphoneId: {
            type: DataTypes.INTEGER,
            require: true
        },
        amount: {
            type: DataTypes.INTEGER,
            require: true
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        }
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'OrdersSmartphones',
        underscored: true,
        tableName: 'orders_smartphones',
    });
    return OrdersSmartphones;
};