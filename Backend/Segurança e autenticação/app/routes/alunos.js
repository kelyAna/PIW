const controller = require("../controllers/alunos")
const controllerAuth = require('../controllers/auth')

module.exports = function (app) {
    app.post("/alunos/signin", controllerAuth.logar)
    app.get("/alunos", controller.listarAlunos);
    app.post("/alunos", controller.inserirAluno);
    app.get("/alunos/:id", controller.buscarAlunoById);
    app.delete("/alunos/:id", controller.removerAluno)
}

