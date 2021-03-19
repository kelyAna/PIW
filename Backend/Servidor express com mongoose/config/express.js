// Importando módulo express (Padrão CommonJS)
const express = require('express');
const routerAlunos = require('../app/routes/alunos');
const routerDisciplinas = require('../app/routes/disciplinas')
const routerMatricula = require('../app/routes/matricula')
const bodyParser = require("body-parser")

// Exportando módulo (Padrão CommonJS)
module.exports = function () {
    let app = express();

    // Definindo variável de aplicação
    app.set("port", 9890);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static('./public'));
    routerAlunos(app);
    routerDisciplinas(app);
    routerMatricula(app)
    return app;

}