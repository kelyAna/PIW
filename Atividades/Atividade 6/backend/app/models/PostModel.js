const mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        texto: {
            type: "String",
            required: true
        },

        likes:{
            type: "Number",
            required: false
        },

        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
            required: false
        },
        nome:{
            type: "String",
            required: false
        }
    })
    return mongoose.model('Post', schema)
}()