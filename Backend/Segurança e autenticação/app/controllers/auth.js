const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const Aluno = require('../models/aluno')

module.exports.logar = function(req, res){
    function logar(aluno){
        if(!bcrypt.compareSync(req.body.senha,aluno.senha)){
            falhar();
        }
        else{
            let token = jwt.sign({id: aluno.id}, 'senha_secreta')
            res.status(200).json({
                message:"Logado",
                token: token,
                alunoId: aluno.id
            })
        }
    }

    function falhar(){
        res.status(401).send("Login inválido!")
    }

    Aluno.findOne({matricula: req.body.matricula}).exec().then(logar,falhar)
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