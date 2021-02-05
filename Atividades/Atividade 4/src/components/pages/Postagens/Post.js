import '../PaginaPrincipal/PaginaPrincipal.css'

export function Postagem(props) {
    return (
        <div className="postagens">
            <div className="card">
                <h4 className="cabecalho">{props.usuario}</h4>
                <div className="card-texto">
                    <p>{props.texto}</p>
                </div>
                <div className="interacoes">
                    <h4 className="likes">{props.qtdLikes} likes</h4>
                    <button>Curtir</button>
                </div>
            </div>
        </div>

    )
}

export default Postagem
