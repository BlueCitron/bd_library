module.exports = (sequelize, DataTypes) => {
  return sequelize.define('division', {
    code: {
      type: DataTypes.STRING(6),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    }
  }, {
    timestamps: true,
    paranoid: true,
  })
}
