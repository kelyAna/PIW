const Usuario = require('../models/UsuarioModel')
const viewUsuario = require('../views/UsuarioView')

module.exports.inserirUsuario = function(req, res){
    let promise = Usuario.create(req.body)

    promise.then(
        function(usuario){
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