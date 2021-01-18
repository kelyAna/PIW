const mongoose = require('mongoose')
const Usuario = require('./UsuarioModel')
const Post = require('./PostModel')

module.exports = function(){
    let schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true
        },

        id_post:{
            type: mongoose.Schema.ObjectId,
            ref: "Post"
        },

        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: "Usuario"
        },
    })
    return mongoose.model('Comentario', schema)
}()