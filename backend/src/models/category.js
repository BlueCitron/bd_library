module.exports = (sequelize, DataTypes) => {
  return sequelize.define('category', {
    code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  })
}
