const controller = require('../controllers/matricula')

module.exports = function(app){
    app.post("/matricula", controller.inserirMatricula)
    app.get("/matricula", controller.listarMatriculas)
}