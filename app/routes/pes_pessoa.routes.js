module.exports = app => {
    const pessoas = require('../controllers/pes_pessoa.controller');
    var router = require('express').Router();

    router.post('/addpessoa',pessoas.create);

    router.get('/seepessoa',pessoas.findAll);
    
    router.get('/seepessoa/:id',pessoas.findOne);

    router.get('/countpessoa',pessoas.count);

    router.delete('/deletarpessoa/:id',pessoas.deleteOne);

    router.delete('/deleteall',pessoas.deleteAll);

    router.get('/pes.aco',pessoas.multitable);

    app.use('/api/pessoa',router);
}