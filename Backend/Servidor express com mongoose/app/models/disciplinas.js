const mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({

        nome: {
            type: "String",
            required: true
        },

        codigo:{
            type: "String",
            required: true
        },

        carga_horaria:{
            type: "Number",
            required: true
        }
    })
    return mongoose.model('Disciplinas', schema)
}()