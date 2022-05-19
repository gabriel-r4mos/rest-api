module.exports = (sequelize, Sequelize) => {
    const aco_acomodacao = sequelize.define('aco_acomodacao', {
        aco_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        aco_nome: {
            type: Sequelize.STRING(40),
            allowNull: false
        },
        aco_preco: {
            type: Sequelize.FLOAT(10,2),
            allowNull: false
        },
        aco_estado: {
            type: Sequelize.CHAR(2),
            allowNull: false
        },
        aco_cidade: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        aco_bairro: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        aco_rua: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        aco_numero: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        aco_cep: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        aco_capacidade: {
            type: Sequelize.INTEGER
            /* allowNull: false */
        },
        aco_qntbanheiro: {
            type: Sequelize.INTEGER
            /* allowNull: false */
        },
        aco_qntquarto: {
            type: Sequelize.INTEGER
            /* allowNull: false */
        },
        aco_qntcama: {
            type: Sequelize.INTEGER
            /* allowNull: false */
        },
        aco_cafe: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_refeicao: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_resfriamento: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_aquecimento: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_geladeira: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_fogao: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_maquinalavar: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_televisao: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_wifi: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_piscina: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_churrasqueira: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_garagem: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        aco_capacidadegaragem: {
            type: Sequelize.INTEGER
        },
        aco_pet: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    },
    {
        // PARA DESATIVAR O CREATEDAT AND UPDATEDAT 
        // VC DEVE DEFINIR AS 'TIMESTAMPS' COMO 'FALSE'
        timestamps: false
    },
    {
        // O SEQUELIZE PLURALIZA OS NOMES COMO PADRÃO
        // ESSE COMANDO TRAVA ISSO, E MANTÉM OS NOMES COMO PADRÃO
        freezeTableName: true
    })
    return aco_acomodacao;
}