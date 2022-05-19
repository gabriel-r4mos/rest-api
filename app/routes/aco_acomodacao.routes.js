module.exports = app => {
    const acomodacoes = require('../controllers/aco_acomodacao.controller');
    var router = require('express').Router();

    router.post('/addacomodacao',acomodacoes.create);

    router.get('/seeacomodacao',acomodacoes.findAll);

    router.get('/seeacomodacao/:id',acomodacoes.findOne);

    router.get('/countaco',acomodacoes.count);

    app.use('/api/acomodacao',router);
}