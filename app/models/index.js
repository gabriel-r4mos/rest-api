const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];

// RELACIONANDO COM O BANCO DE DADOS
const dbConfig = require('../config/database.config');
const db = {};

const Sequelize = require('sequelize');
// NO CÓDIGO ABAIXO, É NECESSÁRIO COLOCAR CHAVES PARA DECLARAR HOST E DIALETO
const sequelize = new Sequelize(dbConfig.database,dbConfig.username,dbConfig.password,{
  host: dbConfig.host,
  dialect: dbConfig.dialect
});
//

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// puxando os modelos
db.pes_pessoa = require('./pes_pessoa.model')(sequelize,Sequelize);
db.aco_acomodacao = require('./aco_acomodacao.model')(sequelize, Sequelize);
db.res_reserva = require('./res_reserva.model')(sequelize, Sequelize);

// associando as foreign keys
db.pes_pessoa.hasMany(db.aco_acomodacao, {
  foreignKey: {
    name: 'pes_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
});
db.pes_pessoa.hasMany(db.res_reserva, {
  foreignKey: {
    name: 'pes_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
});

// db.aco_acomodacao.belongsTo(db.pes_pessoa);
db.aco_acomodacao.hasMany(db.res_reserva, {
  foreignKey: {
    name: 'aco_id',
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
});

/* db.res_reserva.belongsTo(db.pes_pessoa);
db.res_reserva.belongsTo(db.aco_acomodacao); */

module.exports = db;
