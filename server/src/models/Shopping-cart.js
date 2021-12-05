module.exports = (sequelize, DataTypes) => {
    const ShoppingCart = sequelize.define('ShoppingCart', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            require: true,
        },
        smartphoneId: {
            type: DataTypes.INTEGER,
            require: true
        },
        amount: {
            type: DataTypes.INTEGER,
            require: true
        },
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'ShoppingCart',
        underscored: true,
        tableName: 'shopping_cart',
    });

    ShoppingCart.associate = (models) => {
        ShoppingCart.belongsTo(models.Smartphones, { foreignKey: 'smartphone_id' });
    };

    return ShoppingCart;
};