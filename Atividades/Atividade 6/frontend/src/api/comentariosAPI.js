import axios from 'axios'

export function cadastrarComentario(token,comentario){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/comentarios",
        headers: {
            "token": token
        },
        data: comentario
    })
}