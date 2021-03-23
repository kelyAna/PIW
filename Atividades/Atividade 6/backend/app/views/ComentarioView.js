

function render(comentario){
    return{
        id: comentario._id,
        usuario: comentario.usuario,
        texto: comentario.texto,
        id_post: comentario.id_post,
        id_usuario: comentario.id_usuario
    }
}

module.exports.render = render

function renderMany(comentarios){
    return comentarios.map(render)

}

module.exports.renderMany = renderMany