import '../PaginaPrincipal/PaginaPrincipal.css'

export function Postagem(props) {
    return(
        <div className="postagens">
            <h4>{props.usuario}</h4>
            <p>{props.texto}</p>
            <span>{props.qtdLikes}</span>
            <span>👍</span>
        </div>
        
    )
}

export default Postagem
