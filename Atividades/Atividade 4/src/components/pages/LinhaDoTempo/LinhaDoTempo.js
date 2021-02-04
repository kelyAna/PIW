import '../PaginaPrincipal/PaginaPrincipal.css'
import Post from '../Postagens/Post'

function ConteudoPostagens() {

    let infoPosts = {
        posts: [
            {
                id: 1,
                nomePessoa: "Joao",
                texto: "Menino, tá quente demais hoje",
                qtdLikes: 1
            },
            {
                id: 2,
                nomePessoa: "Tiago",
                texto: "Num aguento mais essa quintura",
                qtdLikes: 3
            }
        ]
    }
    const postagem = infoPosts.posts.map((post) => 
        <Post usuario={post.nomePessoa} texto={post.texto} qtdLikes={post.qtdLikes}>
        </Post>
    
    )
    return (
        <div>
            {postagem}
        </div>
    )
}

export default ConteudoPostagens