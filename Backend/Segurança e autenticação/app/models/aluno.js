const mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        nome: {
            type: "String",
            required: true
        },

        matricula: {
            type: "String",
            required: true,
            index: {
                unique: true
            }
        },

        senha: {
            type: "String",
            required:true
        }
    })
    return mongoose.model('Aluno', schema)
}()