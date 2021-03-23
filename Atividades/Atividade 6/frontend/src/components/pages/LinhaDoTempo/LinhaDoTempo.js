import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../../App';
import { listarPosts } from '../../../api/postAPI'
import '../PaginaPrincipal/PaginaPrincipal.css'
import Post from '../Postagens/Post'

function LinhaDoTempo(props) {
    const { auth } = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        listarPosts(auth.token).then(
            (response) => {
                setPosts(response.data)
            }
        ).catch(
            (error => {
                console.log(error)
            })
        )
    }, [auth.token])

    const postagem = posts.map((post) =>
        <Post
            usuario={auth.nome}
            texto={post.texto}
            qtdLikes={post.qtdLikes}
            comentarios={post.comentarios}>
            
        </Post>
    )
    
    return (
        <div className="linha-tempo">
            {postagem}
        </div>
    )
}

export default LinhaDoTempo