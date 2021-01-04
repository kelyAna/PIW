const UsuarioController = require("../controllers/UsuarioController")

module.exports = function (app) {

    app.post("/api/usuarios", UsuarioController.inserirUsuario);
    app.get("/api/usuarios", UsuarioController.listarUsuarios);

}