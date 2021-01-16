const bcrypt = require('bcrypt')
const Aluno = require('../models/aluno')

module.exports.logar = function(req, res){
    function logar(user){
        if(!bcrypt.compareSync(req.body.senha,user.senha)){
            falhar();
        }
        else{
            res.status(200).send("Credenciais estão OK!")
        }
    }

    function falhar(){
        res.status(401).send("Login inválido!")
    }

    Aluno.findOne({matricula: req.body.matricula}).exec().then(logar,falhar)
}

