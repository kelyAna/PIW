const Aluno = require('../models/aluno.js')
const viewAluno = require('../views/aluno')

const bcrypt = require('bcrypt')

module.exports.inserirAluno = function (req, res) {
    let aluno = new Aluno({
        nome: req.body.nome,
        matricula: req.body.matricula,
        senha: bcrypt.hashSync(req.body.senha, 10)
    })

    let promise = Aluno.create(aluno)

    promise.then(
        function (aluno) {
            res.status(201).json(viewAluno.render(aluno))
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro)
        }
    )
}

module.exports.listarAlunos = function (req, res) {
    let promise = Aluno.find().exec();
    promise.then(
        function (alunos) {
            res.json(viewAluno.renderMany(alunos))
        }
    ).catch(
        function (error) {
            res.status(500).end();
        }
    );
}

module.exports.buscarAlunoById = function(req, res){
    let id = req.params.id
    let promise = Aluno.findById(id).exec()

    promise.then(function(aluno){
        res.status(201).json(viewAluno.render(aluno))
    }).catch(function(error){
        res.status(400).json({mensagem: 'não encontrado', error:error})
    })
}

module.exports.removerAluno = function(req, res){
    let id = req.params.id
    let promise = Aluno.findByIdAndDelete(id)

    promise.then(function(aluno){
        res.status(200).json(viewAluno.render(aluno))
    }).catch(function(error){
        res.status(400).json({mensagem: 'Não foi possível remover o aluno', error:error})
    })
}