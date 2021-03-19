import '../PaginaPrincipal/PaginaPrincipal.css'

export function Postagem(props) {
    return (
        <div className="postagens">
            <div className="card">
                <div className="cabecalho">
                    <img src="/user.png" alt="" />
                    <span>{props.usuario}</span>
                </div>
                <div className="card-texto">
                    <p>{props.texto}</p>
                </div>
                <div className="interacoes">
                    <div className="likes">
                        {props.qtdLikes}
                        <span>likes</span>
                    </div>
                    <button>
                        <img src="/like.png" alt="" />
                    </button>
                </div>
                <hr />
                <div className="comentarios">
                    <div className="card-comentarios">
                        <div className="cabecalho-comentarios">
                            <img src="/user.png" alt="" />
                            <span>Ana</span>
                        </div>
                        <p>Tenho que concordar.</p>
                        <textarea name="" id="" cols="30" rows="2">Escreva sua mensagem</textarea>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Postagem
