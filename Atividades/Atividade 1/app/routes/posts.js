const controller = require("../controllers/posts")

module.exports = function (app) {

    app.post("/api/posts", controller.inserirPost);

    /*
    app.get("/api/usuarios", controller.listarUsuarios);
    
    app.get("/api/usuarios/:id", controller.buscarUsuarioPorId);

    app.delete("/api/usuarios/:id", controller.removerUsuario)
    */
}