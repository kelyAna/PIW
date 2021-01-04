// Importando módulo express (Padrão CommonJS)
const express = require('express');
const routerUsuarios = require('../app/routes/UsuariosRouter');
const bodyParser = require("body-parser")

module.exports = function () {
    let app = express();

    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    
    app.use(express.static('./public'));
    routerUsuarios(app);
    return app;
}