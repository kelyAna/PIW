const mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true
        },

        id_post:{
            type: mongoose.Schema.ObjectId,
            required: true
        },

        id_usuario:{
            type: mongoose.Schema.ObjectId,
            required: true
        },
    })
    return mongoose.model('Comentario', schema)
}()