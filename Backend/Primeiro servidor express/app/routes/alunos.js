const controller = require("../controllers/alunos")

module.exports = function (app) {

    app.get("/alunos", controller.listarAlunos);
    app.get("/alunos/:id", controller.buscarAlunoPorId);

    app.post("/alunos", controller.inserirAluno);

    app.delete("/alunos/:id", controller.removerAluno)
}