const { aco_acomodacao } = require('../models');
const db = require('../models');
const Pessoa = db.pes_pessoa;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {

    // res.send('para criar uma pessoa, você deve inserir -> pes_id, pes_cpf, pes_nome, pes_email, pes_nasc e pes_senha');
    
    if(!req.body.pes_id){
        res.status(400).send({
            message: 'o conteudo nao pode ser vazio'
        })
        return;
    }

    const pessoa = {
        pes_id: req.body.pes_id,
        pes_cpf: req.body.pes_cpf,
        pes_nome: req.body.pes_nome,
        pes_email: req.body.pes_email,
        pes_nasc: req.body.pes_nasc,
        pes_senha: req.body.pes_senha
    }

    Pessoa.create(pessoa)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'deu ruim'
        })
    })
}

exports.findAll = (req,res) => {
    Pessoa.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'deu ruim'
            })
        })

}

exports.deleteAll = (req,res) => {
    // destroy => para deletar tudo vc tem q especificar com where vazio e truncate desligado
    Pessoa.destroy({
        where: {},
        truncate: false
    })
    // num => numero de usuarios deletados
    .then(num => {
        res.send(`o numero de usuarios deletados foi de ${num}`);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'deu ruim'
        })
    })
}

exports.deleteOne = (req,res) => {
    const id = req.params.id;
    Pessoa.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'o user foi deletado'
                })
            } else {
                res.send({
                    message: `nao deu pra deletar o user com id ${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'nao foi possivel deletar o tutorial com id '+id
            })
        })
}

exports.findOne = (req,res) => {
    const id = req.params.id;
    Pessoa.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `nao deu pra encontrar tutorial com id ${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `ocorreu um erro`
            })
        })
}

exports.count = (req,res) => {
    Pessoa.findAll({
        attributes: [
            'pes_id',
            [db.Sequelize.fn('COUNT',db.Sequelize.col('pes_nome')),'pes_nome']
        ],
        order: [
            ['pes_id']
        ]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        message: err.message || 'deu ruim'
    })
}

exports.multitable = (req, res) => {
    Pessoa.findAll({
        attribute: ['pes_id'],
        include: [
            {model: aco_acomodacao, attributes: ['aco_nome']}
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            message: err.message || 'deu ruim'
        })
}