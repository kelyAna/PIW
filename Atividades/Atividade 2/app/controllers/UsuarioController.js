const Usuario = require('../models/UsuarioModel')
const Post = require('../models/PostModel')
const viewUsuario = require('../views/UsuarioView')
const viewPost = require('../views/PostView')

module.exports.inserirUsuario = function (req, res) {
    let promise = Usuario.create(req.body)

    promise.then(
        function (usuario) {
            res.status(201).json(viewUsuario.render(usuario))
        }
    )
}

module.exports.listarUsuarios = function (req, res) {
    let promise = Usuario.find().exec();
    promise.then(
        function (usuarios) {
            res.json(viewUsuario.renderMany(usuarios))
        }
    ).catch(
        function (error) {
            res.status(500).end();
        }
    );
}

module.exports.buscarUsuarioById = function (req, res) {
    let id = req.params.id
    let promise = Usuario.findById(id).exec()

    promise.then(
        function (usuario) {
            res.json(viewUsuario.render(usuario))
        }
    ).catch(
        function (error) {
            res.status(404).json({ mensagem: 'Usuário não encontrado.', error: error })
        }
    )
}

module.exports.buscarPostByIdUsuario = function (req, res) {
    let id_usuario = req.params.id
    let promise = Post.find({ id_usuario: id_usuario })

    promise.then(
        function (posts) {
            res.json(viewPost.renderMany(posts))
        }
    ).catch(
        function (error) {
            res.status(404).json({ mensagem: 'Posts não encontrados.', error: error })
        }
    )
}

module.exports.removerUsuario = function (req, res) {
    let id = req.params.id
    let promise = Usuario.findByIdAndDelete(id)

    promise.then(
        function (usuario) {
            res.status(200).json(viewUsuario.render(usuario))
        }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: 'Não foi possível remover usuário.', error: error })
        }
    )
}
