const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const Usuario = require('../models/UsuarioModel')

module.exports.logar = function (req, res) {

    Usuario.findOne({ email: req.body.email })
        .then(function(usuario) {
            if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
                let token = jwt.sign({ id: usuario.id }, 'senha_secreta')
                res.status(200).json({
                    message: "Logado",
                    token: token,
                    usuarioId: usuario.id,
                    nome: usuario.nome
                })
            }
            else {
                res.status(401).send("Credenciais erradas")
            }

        }).catch(function(error){
            res.status(401).send("Login inválido!")

        })

}

module.exports.checar = function (req, res, next) {
    jwt.verify(req.headers.token, 'senha_secreta', function (err, decoder) {
        if (err) {
            return res.status(401).json({
                title: 'Não autenticado.',
                error: err
            })
        }
        next()
    })
}