const PostController = require("../controllers/PostController")
const controllerAuth = require('../controllers/AuthController')

module.exports = function (app) {
    app.use("/api/posts", controllerAuth.checar)
    app.post("/api/posts", PostController.inserirPost);
    app.get("/api/posts", PostController.listarPost);
    app.get("/api/posts/:id", PostController.buscarPostById);
    app.get("/api/posts/:id/comentarios", PostController.buscarComentarioByIdPost)
    app.delete("/api/posts/:id", PostController.removerPost);
}