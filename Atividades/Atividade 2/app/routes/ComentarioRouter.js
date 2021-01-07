const ComentarioController = require("../controllers/ComentarioController")

module.exports = function (app) {

    app.post("/api/comentarios",ComentarioController.inserirComentario);
    app.get("/api/comentarios", ComentarioController.listarComentario);
    app.delete("/api/comentarios/:id", ComentarioController.removerComentario);

}