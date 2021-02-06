import '../PaginaPrincipal/PaginaPrincipal.css'
import Post from '../Postagens/Post'

function LinhaDoTempo() {

    let infoPosts = {
        posts: [
            {
                id: 1,
                nomePessoa: "João",
                texto: "Menino, tá quente demais hoje",
                qtdLikes: 1
            },
            {
                id: 2,
                nomePessoa: "Tiago",
                texto: "Num aguento mais essa quintura",
                qtdLikes: 3
            },
            {
                id: 3,
                nomePessoa: "Talia",
                texto: "Num aguento mais essa quintura",
                qtdLikes: 3
            },
            {
                id: 4,
                nomePessoa: "Tais",
                texto: "Num aguento mais essa quintura",
                qtdLikes: 3
            },
            {
                id: 5,
                nomePessoa: "Ana",
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
        <div className="linha-tempo">
            {postagem}
        </div>
    )
}

export default LinhaDoTempo