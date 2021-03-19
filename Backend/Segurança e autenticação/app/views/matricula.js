const viewAluno = require("../views/aluno")
const viewDisciplina = require("../views/disciplinas")

function render(matricula) {
    return {
        id: matricula._id,
        aluno: viewAluno.render(matricula.aluno),
        disciplina: viewDisciplina.render(matricula.disciplina)
    }

}

module.exports.render = render


function renderMany(matricula){
    return matricula.map(render)
}

module.exports.renderMany = renderMany