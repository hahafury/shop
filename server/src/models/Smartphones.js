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
        },
        camera: {
            type: DataTypes.STRING,
        },
        operationSystem: {
            type: DataTypes.STRING,
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        color: {
            type: DataTypes.STRING,
        },
        memory: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.DOUBLE
        }
    },
    {
        timestamps: false,
        sequelize,
        modelName: 'Smartphones',
        underscored: true,
        tableName: 'smartphones',
    });
    
    return Smartphones;
};