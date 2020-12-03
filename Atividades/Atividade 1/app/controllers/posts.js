
let posts = [
    { 
        id: 1,
        texto: "Oi, tudo bem?",
        likes: 6,
    },
    
];

module.exports.inserirPost = function(req,res){
    let post = req.body;
    posts.push(post);
    res.json(post).status(201);
}

module.exports.listarPosts = function (req, res) {
    let posts_retorno = posts;
    if(req.query.nome){
        let nome = req.query.nome;
        posts_retorno = posts.filter(function(post){
            return post.nome==nome
        });
    }
    res.json(posts_retorno);
}

module.exports.buscarPostPorId = function (req, res) {
    let id = req.params.id;
    let post = posts.find(function (post) {
        return post.id == id;
    });
    if (post) {
        res.json(post)
    } else {
        res.json({
            mensagem: "Post não encontrado."
        }).status(4040);
    }
}

module.exports.removerPost = function(req,res){
    let id = req.params.id;

    posts = posts.filter(function(post){return post.id != id;});

    res.json({mensagem: "Post excluído."})
}
