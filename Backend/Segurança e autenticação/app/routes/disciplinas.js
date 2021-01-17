const controller = require("../controllers/disciplinas")
const controllerAuth = require("../controllers/auth")

module.exports = function (app) {
    app.use("/disciplinas", controllerAuth.checar)
    app.get("/disciplinas",controller.listarDisciplinas);
    app.post("/disciplinas",controller.inserirDisciplina);
    
}