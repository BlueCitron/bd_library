// 저자

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('author', {
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
