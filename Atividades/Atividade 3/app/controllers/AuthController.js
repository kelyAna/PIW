const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const Usuario = require('../models/UsuarioModel')

module.exports.logar = function(req, res){
    function logar(usuario){
        if(!bcrypt.compareSync(req.body.senha,usuario.senha)){
            falhar();
        }
        else{
            let token = jwt.sign({id: usuario.id}, 'senha_secreta')
            res.status(200).json({
                message:"Logado",
                token: token,
                usuarioId: usuario.id
            })
        }
    }

    function falhar(){
        res.status(401).send("Login inválido!")
    }

    Usuario.findOne({id: req.body.id}).exec().then(logar,falhar)
}

module.exports.checar = function(req, res, next){
    jwt.verify(req.headers.token, 'senha_secreta', function(err, decoder){
        if(err){
            return res.status(401).json({
                title:'Não autenticado.',
                error: err
            })
        }
        next()
    })
}