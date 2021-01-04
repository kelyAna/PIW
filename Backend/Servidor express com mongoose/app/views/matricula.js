function render(matricula) {
    return {
        id: matricula._id,
        aluno: matricula.aluno,
        disciplina: matricula.disciplina
    }

}

module.exports.render = render


function renderMany(matricula){
    return matricula.map(render)
}

module.exports.renderMany = renderMany