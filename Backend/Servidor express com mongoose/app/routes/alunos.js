const controller = require("../controllers/alunos")

module.exports = function (app) {

    app.get("/alunos", controller.listarAlunos);
    app.post("/alunos", controller.inserirAluno);
    app.get("/alunos/:id", controller.buscarAlunoById);
    app.delete("/alunos/:id", controller.removerAluno)
}