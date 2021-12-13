module.exports = (sequelize, DataTypes) => {
    const Smartphones = sequelize.define('Smartphones', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        brand: {
            type: DataTypes.STRING,
            require: true,
        },
        model: {
            type: DataTypes.STRING,
            require: true
        },
        display: {
            type: DataTypes.STRING,
            require: true
        },
        cellular: {
            type: DataTypes.STRING,
            require: true
        },
        processor: {
            type: DataTypes.STRING,
            require: true
        },
        camera: {
            type: DataTypes.STRING,
            require: true
        },
        operationSystem: {
            type: DataTypes.STRING,
            require: true
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            require: true
        },
        color: {
            type: DataTypes.STRING,
            require: true
        },
        memory: {
            type: DataTypes.STRING,
            require: true
        },
        price: {
            type: DataTypes.DOUBLE,
            require: true
        }
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'Smartphones',
        underscored: true,
        tableName: 'smartphones',
        });
    
    Smartphones.associate = (models) => {
        Smartphones.hasMany(models.ShoppingCart, { foreignKey: 'smartphone_id' });
    };

    Smartphones.associate = (models) => {
        Smartphones.belongsToMany(models.Orders, {
            through: models.OrdersSmartphones,
            foreignKey: 'smartphone_id'
        });
    };

    
    return Smartphones;
};