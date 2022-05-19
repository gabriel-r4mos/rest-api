const Sequelize = require('sequelize');

var connection = new Sequelize('pi','pi','password',{
    host: 'localhost',
    dialect: 'mysql'
});

var conexao = connection.authenticate()
    .then(function() {
        console.log('conexao estabelecida');
    })
    .catch(function(err) {
        console.log('nao deu pra conectar');
    })
    .done()