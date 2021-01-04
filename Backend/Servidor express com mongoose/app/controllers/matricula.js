const Matricula = require('../models/matricula.js');
const viewMatricula = require('../views/matricula')

module.exports.listarMatriculas = function (req, res) {
    let promise = Matricula.find().exec();
    
    promise.then(
        function (matriculas) {
            res.json(viewMatricula.renderMany(matriculas))
        }
    ).catch(
        function (erro) {
            res.status(500).send('Erro');
        }
    );
}


module.exports.inserirMatricula = function (req, res) {
    let promise = Matricula.create(req.body);
    promise.then(
        (matricula) => {
            res.status(201).json(viewMatricula.render(matricula));
        }
    ).catch(
        (erro) => {
            res.status(500).json(erro);
        }
    );
}