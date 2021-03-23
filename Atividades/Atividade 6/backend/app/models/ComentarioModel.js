const mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        usuario: {
            type: "String",
            required: false
        },
        texto: {
            type: "String",
            required: false
        },

        id_post:{
            type: mongoose.Schema.ObjectId,
            ref: "Post",
            required: false
        }
    })
    return mongoose.model('Comentario', schema)
}()