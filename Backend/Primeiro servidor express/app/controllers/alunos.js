
let alunos = [
    { id: 1, nome: "Ana", sobrenome: "Kely" },
    { id: 2, nome: "Kely", sobrenome: "Lopes" },
];

module.exports.listarAlunos = function (req, res) {
    let alunos_retorno = alunos;
    if(req.query.nome){
        let nome = req.query.nome;
        alunos_retorno = alunos.filter(function(aluno){
            return aluno.nome==nome
        });
    }
    res.json(alunos_retorno);
}

module.exports.buscarAlunoPorId = function (req, res) {
    let id = req.params.id;
    let aluno = alunos.find(function (aluno) {
        return aluno.id == id;
    });
    if (aluno) {
        res.json(aluno)
    } else {
        res.json({
            mensagem: "Aluno não encontrado"
        }).status(4040);
    }
}

module.exports.inserirAluno = function(req,res){
    let aluno = req.body;
    alunos.push(aluno);
    res.json(aluno).status(201);
}

module.exports.removerAluno = function(req,res){
    let id = req.params.id;

    alunos = alunos.filter(function(aluno){return aluno.id != id;});

    res.json({mensagem: "Aluno excluído."})
}