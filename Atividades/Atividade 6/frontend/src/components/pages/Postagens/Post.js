import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { cadastrarComentario } from '../../../api/comentariosAPI'
import { listarComentarios } from '../../../api/postAPI'
import { AuthContext } from '../../../App'

import '../PaginaPrincipal/PaginaPrincipal.css'

function FormularioComentario({ onSubmeter }) {
    const { register, handleSubmit } = useForm([]);
    const submeter = (comentario) => { onSubmeter(comentario) }

    return (
        <form onSubmit={handleSubmit(submeter)}>
            <input type="text" name="texto" ref={register}/>
           
            <button>Comentar</button>
        </form>
    )
}

function ListarComentarios({ comentarios }) {
    const { auth } = useContext(AuthContext)

    let lista = comentarios.map((comentario) => (
        <div>
            <span>
                <img src="/user.png" alt="" style={{width:20, alignContent: 'center'}}/>
                {auth.nome}
            </span>
            <p>
                {comentario.texto}
            </p>
        </div>
    )
    )
    return (
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}

function Comentario(){
    const { auth } = useContext(AuthContext)
    const [comentarios, setComentarios] = useState([])

    const atualizarComentarios = () => {
        listarComentarios(auth.token).then(
            (response) => {
                setComentarios(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }


    useEffect(() => {
        atualizarComentarios()
    }, [])

    const adicionarComentario = (comentario) => {
        cadastrarComentario(auth.token, comentario).then(
            (response) => {
                atualizarComentarios(response)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return(
        <div>
            <ListarComentarios comentarios={comentarios}></ListarComentarios>
            <FormularioComentario onSubmeter={adicionarComentario}></FormularioComentario>
        </div>
    )
}

export function Postagem(props) {
    const { auth } = useContext(AuthContext)

    const [count, setCount] = useState(0)

    const clicouBotao = () => {
        setCount(count + 1)
    }

    return (
        <div className="postagens">
            <div className="card">
                <div className="cabecalho">
                    <img src="/user.png" alt="" />
                    <span>{props.usuario}</span>
                </div>

                <hr />

                <div className="card-texto">
                    <p>{props.texto}</p>
                </div>

                <div className="interacoes">
                    <div className="likes">
                        {props.qtdLikes}
                        <span>{count} likes</span>
                    </div>
                    <button onClick={clicouBotao}>
                        <img src="/like.png" alt="" />
                    </button>
                </div>
                <hr />
                <div className="comentarios">
                   <Comentario></Comentario>
                </div>
            </div>
        </div>

    )
}

export default Postagem
