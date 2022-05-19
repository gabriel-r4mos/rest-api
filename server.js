const express = require('express');
const db = require('./app/models');
const app = express();
const port = process.env.port || 8080;
db.sequelize.sync();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req,res) => {
    res.send('teste');
})

require('./app/routes/pes_pessoa.routes')(app);
require('./app/routes/aco_acomodacao.routes')(app);

app.listen(port, () => {
    console.log(`rodando na porta ${port}`);
})