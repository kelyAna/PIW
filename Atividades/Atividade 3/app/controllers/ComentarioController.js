const Comentario = require('../models/ComentarioModel')
const viewComentario = require('../views/ComentarioView')
const jwt = require('jsonwebtoken')

module.exports.inserirComentario = function (req, res) {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_usuario_logado = payload.id

    let comentario = {
        texto: req.body.texto,
        id_comentario: req.body.id_comentario,
        id_usuario: id_usuario_logado
    }

    let promise = Comentario.create(comentario)

    promise.then(
        function (comentario) {
            res.status(201).json(viewComentario.render(comentario))
        }
    )
}

module.exports.listarComentario = function (req, res) {
    let promise = Comentario.find().exec();
    promise.then(
        function (comentarios) {
            res.json(viewComentario.renderMany(comentarios))
        }
    ).catch(
        function (error) {
            res.status(500).end();
        }
    );
}


module.exports.removerComentario = function (req, res) {
    let token = req.headers.token
    let payload = jwt.decode(token)
    let id_usuario_logado = payload.id

    let id = req.params.id
    let promise = Comentario.findOneAndDelete({_id:id, id_usuario:id_usuario_logado})

    promise.then(
        function (comentario) {
            res.status(200).json(viewComentario.render(comentario))
        }
    ).catch(
        function (error) {
            res.status(400).json({ mensagem: 'Não foi possível remover comentário.', error: error })
        }
    )
}
