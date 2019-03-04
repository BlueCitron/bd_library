// 자료실

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('reference', {
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
