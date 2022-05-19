module.exports = (sequelize, Sequelize) => {
    const pes_pessoa = sequelize.define('pes_pessoa', {
        pes_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pes_cpf: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pes_nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pes_email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        pes_nasc: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        pes_senha: {
            type: Sequelize.STRING,
            allowNull: false
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
    return pes_pessoa;
}