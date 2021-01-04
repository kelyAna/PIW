
function render(usuario){
    return{
        id: usuario._id,
        nome: usuario.nome,
        email: usuario.email
    }
}

module.exports.render = render

function renderMany(usuarios){
    return usuarios.map(render)

}

module.exports.renderMany = renderMany