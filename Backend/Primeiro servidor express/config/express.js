// Importando módulo express (Padrão CommonJS)
const express = require('express');

// Exportando módulo (Padrão CommonJS)
module.exports = function(){
    let app = express();

    // Definindo variável de aplicação
    app.set("port", 8393);
    app.use(express.static('./public'));
    return app;
}