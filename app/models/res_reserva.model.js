module.exports = (sequelize, Sequelize) => {
    const res_reserva = sequelize.define('res_reserva', {
        res_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        res_datareserva: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        res_status: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        res_checkin: {
            type: Sequelize.DATE,
            allowNull: false
        },
        res_checkout: {
            type: Sequelize.DATE,
            allowNull: false
        },
        res_qntpessoas: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        res_pagmetodo: {
            type: Sequelize.ENUM('debito','credito','boleto','dinheiro'),
            allowNull: false
        },
        res_valor: {
            type: Sequelize.FLOAT(10,2),
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
    
    return res_reserva;
}