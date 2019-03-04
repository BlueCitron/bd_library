'use strict';

import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 저자
db.Author = require('./author')(sequelize, Sequelize);
// 책
db.Book = require('./book')(sequelize, Sequelize);
// 대분류
db.Category = require('./category')(sequelize, Sequelize);
// 중분류
db.Division = require('./division')(sequelize, Sequelize);
// 도서관
db.Library = require('./library')(sequelize, Sequelize);
// 출판사
db.Publisher = require('./publisher')(sequelize, Sequelize);
// 자료실
db.Reference = require('./reference')(sequelize, Sequelize);

// 책 - 대분류 관계
db.Category.hasMany(db.Book);
db.Book.belongsTo(db.Category);
// 책 - 중분류 관계
db.Division.hasMany(db.Book);
db.Book.belongsTo(db.Division);
// 책 - 저자 관계
db.Author.hasMany(db.Book);
db.Book.belongsTo(db.Author);
// 책 - 도서관 관계
db.Library.hasMany(db.Book);
db.Book.belongsTo(db.Library);
// 책 - 출판사 관계
db.Publisher.hasMany(db.Book);
db.Book.belongsTo(db.Publisher);
// 책 - 자료실 관계
db.Reference.hasMany(db.Book);
db.Book.belongsTo(db.Reference);
// 도서관 - 자료실 관계
db.Library.hasMany(db.Reference);
db.Reference.belongsTo(db.Library);
// 대분류 - 중분류 관계
db.Category.hasMany(db.Division);
db.Division.belongsTo(db.Category);

module.exports = db;
