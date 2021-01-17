const Matricula = require('../models/matricula.js');
const viewMatricula = require('../views/matricula')

const jwt = require('jsonwebtoken')

module.exports.listarMatriculas = function (req, res) {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_aluno_logado = payload.id
    
    let promise = Matricula.find({aluno:id_aluno_logado})
                            .populate("disciplina")
                            .populate("aluno")
                            .exec()
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
    let id_disciplina = req.body.disciplina
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_aluno_logado = payload.id

    let promise = Matricula.create({disciplina:id_disciplina,aluno:id_aluno_logado})
    promise.then(function (matricula) {
        res.status(201).json(viewMatricula.render(matricula));
    }).catch(function (erro) {
        res.status(500).json(erro)
        }
    );
}