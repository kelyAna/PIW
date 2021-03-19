const jwt = require('jsonwebtoken')

const Matricula = require('../models/matricula.js');
const viewMatricula = require('../views/matricula')

module.exports.inserirMatricula = function(req, res) {
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

module.exports.listarMatriculas = function (req, res) {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_aluno_logado = payload.id
    
    let promise = Matricula.find({aluno:id_aluno_logado}).populate("disciplinas").populate("alunos").exec()
    promise.then(function(matriculas) {
            res.status(200).json(viewMatricula.renderMany(matriculas))
        }).catch(function(error) {
            res.status(500).json({mensagem:"erro", error: error});
        }
    );
}


