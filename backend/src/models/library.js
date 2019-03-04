module.exports = (sequelize, DataTypes) => {
  return sequelize.define('library', {
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
