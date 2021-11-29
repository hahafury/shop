module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    login: {
        type: DataTypes.STRING,
        require: true,
    },
    password: {
        type: DataTypes.STRING,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    phone: {
        type: DataTypes.STRING,
        require: true
    },
    city: {
        type: DataTypes.STRING,
    },
    refreshToken: {
        type: DataTypes.STRING,
    }
  },
  {
        timestamps: false,
        sequelize,
        modelName: 'Users',
        underscored: true,
        tableName: 'users',
  });

  Users.associate = function (models) {
    //User.hasMany(models.Order, { foreignKey: 'user_id', targetKey: 'id' });
  };

  return Users;
};