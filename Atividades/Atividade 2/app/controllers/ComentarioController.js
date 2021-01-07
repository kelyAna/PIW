const Comentario = require('../models/ComentarioModel')
const viewComentario = require('../views/ComentarioView')

module.exports.inserirComentario = function (req, res) {
    let promise = Comentario.create(req.body)

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
    let id = req.params.id
    let promise = Comentario.findByIdAndDelete(id)

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
