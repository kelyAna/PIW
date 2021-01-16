const controller = require("../controllers/disciplinas")

module.exports = function (app) {

    app.get("/disciplinas",controller.listarDisciplinas);
    app.post("/disciplinas",controller.inserirDisciplina);
    
}