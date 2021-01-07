const UsuarioController = require("../controllers/UsuarioController")

module.exports = function (app) {
    app.post("/api/usuarios", UsuarioController.inserirUsuario);
    app.get("/api/usuarios", UsuarioController.listarUsuarios);
    app.get("/api/usuarios/:id", UsuarioController.buscarUsuarioById)
    app.get("/api/usuarios/:id/posts", UsuarioController.buscarPostByIdUsuario)
    app.delete("/api/usuarios/:id", UsuarioController.removerUsuario)
}