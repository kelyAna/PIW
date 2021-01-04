const Disciplina = require('../models/disciplinas')
const viewDisciplina = require('../views/disciplinas')

module.exports.listarDisciplinas = function(req, res){
    let promise = Disciplina.find().exec()

    promise.then(function(alunos){
        res.status(200).json(viewDisciplina.renderMany(alunos))
    }).catch(function(error){
        res.status(500).json({mensagem:"Não foi possível listar"})
    })
}

module.exports.inserirDisciplina = function(req, res){
    let disciplina = req.body 
    let promise = Disciplina.create(disciplina)

    promise.then(function(aluno){
        res.status(201).json(viewDisciplina.render(disciplina))
    }).catch(function(error){
        res.status(500).json({mensagem: "Não foi possível inserir esta disciplina."})
    })
}