module.exports = (sequelize, DataTypes) => {
  return sequelize.define('publisher', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  })
}
