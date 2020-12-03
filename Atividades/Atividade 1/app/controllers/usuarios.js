
let usuarios = [
    { 
        id: 1,
        nome: "Ana",
        email: "ana@gmail.com",
        senha: "123"
    },
    
];

module.exports.inserirUsuario = function(req,res){
    let usuario = req.body;
    usuarios.push(usuario);
    res.json(usuario).status(201);
}

module.exports.listarUsuarios = function (req, res) {
    res.json(usuarios);
}

module.exports.buscarUsuarioPorId = function (req, res) {
    let id = req.params.id;
    let usuario = usuarios.find(function (usuario) {
        return usuario.id == id;
    });
    if (usuario) {
        res.json(usuario)
    } else {
        res.json({
            mensagem: "Usuário não encontrado"
        }).status(4040);
    }
}

module.exports.removerUsuario = function(req,res){
    let id = req.params.id;

    usuarios = usuarios.filter(function(usuario){return usuario.id != id;});

    res.json({mensagem: "Usuário excluído."})
}
