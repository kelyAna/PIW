const controller = require('../controllers/matricula')
const controllerAuth = require("../controllers/auth")

module.exports = function(app){
    app.use("/matricula", controllerAuth.checar)
    app.post("/matricula", controller.inserirMatricula)
    app.get("/matricula", controller.listarMatriculas)
}