const mongoose = require('mongoose')

module.exports = function () {
    let schema = mongoose.Schema({
        aluno: {
            type: mongoose.Schema.ObjectId,
            ref: 'Aluno'
        },
        disciplina: {
            type: mongoose.Schema.ObjectId,
            ref: 'Disciplina'
        }
    })
    return mongoose.model('Matricula', schema)
}()