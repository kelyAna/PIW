const Post = require('../models/PostModel')
const viewPost = require('../views/PostView')
const Comentario = require('../models/ComentarioModel')
const viewComentario = require('../views/ComentarioView')

const jwt = require('jsonwebtoken')


module.exports.inserirPost = function (req, res) {
    let promise = Post.create(req.body)

    promise.then(
        function (post) {
            res.status(201).json(viewPost.render(post))
        }
    ).catch(
        function (error) {
            res.status(500).json(error)
        }
    )
}

module.exports.listarPost = function (req, res) {
    let promise = Post.find().exec();
    promise.then(
        function (posts) {
            res.json(viewPost.renderMany(posts))
        }
    ).catch(
        function (error) {
            res.status(500).end();
        }
    );
}

module.exports.buscarPostById = function (req, res) {
    let id = req.params.id
    let promise = Post.findById(id).exec()

    promise.then(function (post) {
        res.status(201).json(viewPost.render(post))
    }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: 'Não encontrado', error: error })
        }
    )
}

module.exports.buscarComentarioByIdPost = function (req, res) {
    let id_comentario = req.params.id_comentario
    let promise = Comentario.find({ id_comentario: id_comentario }).exec()

    promise.then(
        function (comentarios) {
            res.json(viewComentario.renderMany(comentarios))
        }
    ).catch(
        function (error) {
            res.status(404).json({ mensagem: 'Comentários não encontrados.', error: error })
        }
    )
}

module.exports.removerPost = function (req, res) {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_usuario_logado = payload.id

    let id = req.params.id
    let promise = Post.findOneAndDelete({_id: id, id_usuario: id_usuario_logado})

    promise.then(
        function (post) {
            res.status(200).json(viewPost.render(post))
        }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: 'Não foi possível remover.', error: error })
        }
    )
}



