const UsuarioController = require("../controllers/UsuarioController")
const controllerAuth = require('../controllers/AuthController')

module.exports = function (app) {
    app.post("/api/usuario/signin", controllerAuth.logar)
    app.post("/api/usuarios", UsuarioController.inserirUsuario);

    app.use("/api/usuarios", controllerAuth.checar)
    app.get("/api/usuarios", UsuarioController.listarUsuarios);
    app.get("/api/usuarios/:id", UsuarioController.buscarUsuarioById)
    app.get("/api/usuarios/:id/posts", UsuarioController.buscarPostByIdUsuario)
    app.delete("/api/usuarios/:id", UsuarioController.removerUsuario)
}