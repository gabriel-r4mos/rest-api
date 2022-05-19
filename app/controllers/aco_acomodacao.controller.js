const db = require('../models');
const Acomodacao = db.aco_acomodacao;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    
    if (!req.body.aco_id){
        req.status(400).send({
            message: 'o conteudo nao pode ser vazio'
        })
        return;
    }

    const acomodacao = {
        aco_id: req.body.aco_id,
        aco_nome: req.body.aco_nome,
        aco_preco: req.body.aco_preco,
        aco_estado: req.body.aco_estado,
        aco_cidade: req.body.aco_cidade,
        aco_bairro: req.body.aco_bairro,
        aco_rua: req.body.aco_rua,
        aco_numero: req.body.aco_numero,
        aco_cep: req.body.aco_cep,
        aco_capacidade: req.body.aco_capacidade,
        aco_qntbanheiro: req.body.aco_qntbanheiro,
        aco_qntquarto: req.body.aco_qntquarto,
        aco_qntcama: req.body.aco_qntcama,
        aco_cafe: req.body.aco_cafe,
        aco_refeicao: req.body.aco_refeicao,
        aco_resfriamento: req.body.aco_resfriamento,
        aco_aquecimento: req.body.aco_aquecimento,
        aco_geladeira: req.body.aco_geladeira,
        aco_fogao: req.body.aco_fogao,
        aco_maquinalavar: req.body.aco_maquinalavar,
        aco_televisao: req.body.aco_televisao,
        aco_wifi: req.body.aco_wifi,
        aco_piscina: req.body.aco_piscina,
        aco_churrasqueira: req.body.aco_churrasqueira,
        aco_garagem: req.body.aco_garagem,
        aco_capacidadegaragem: req.body.aco_capacidadegaragem,
        aco_pet: req.body.aco_pet,
        pes_id: req.body.pes_id
    }

    Acomodacao.create(acomodacao)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'deu mt ruim'
            })
        })

}

exports.findAll = (req,res) => {
    Acomodacao.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(500).send({
                message: 'deu ruim man'
            })
        })
}

exports.findOne = (req,res) => {
    const id = req.params.id;
    Acomodacao.findByPk(id)
    .then(data => {
    if (data) {
        res.send(data);
    } else {
        res.status(404).send({
            message: 404 || `nao deu pra encontrar a acomodacao com id ${id}`
        })
    }
    })
    .catch(err => {
        message: err.message || 'nao foi possivel completar a operação'
    })
}

exports.count = (req,res) => {
    Acomodacao.findAll({
        attributes: [
            [db.Sequelize.fn('COUNT',db.Sequelize.col('aco_id')),'aco_id']
        ],
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        message: err.message || 'deu ruinzao mano'
    })
}

exports.deleteOne = (req,res) => {
    const id = req.params.id;
    Acomodacao.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'a acomodacao foi deletada'
                })
            } else {
                res.send({
                    message: `nao deu pra deletar a acomodacao com id ${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'nao foi possivel concluir a operação'
            })
        })
}

