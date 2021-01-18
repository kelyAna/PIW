const ComentarioController = require("../controllers/ComentarioController")
const controllerAuth = require('../controllers/AuthController')

module.exports = function (app) {
    app.use("/api/comentarios", controllerAuth.checar)
    app.post("/api/comentarios",ComentarioController.inserirComentario);
    app.get("/api/comentarios", ComentarioController.listarComentario);
    app.delete("/api/comentarios/:id", ComentarioController.removerComentario);

}