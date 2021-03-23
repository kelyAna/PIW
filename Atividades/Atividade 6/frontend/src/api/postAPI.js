import axios from 'axios'

export function listarPosts(token){
    return axios({
        method: "GET",
        url: "http://localhost:8393/api/posts",
        headers: {
            "token": token,
        }
    })
}

export function listarComentarios(token){
    return axios({
        method: "GET",
        url: "http://localhost:8393/api/comentarios",
        //url: "http://localhost:8393/api/posts/"+id+"/comentarios",
        headers: {
            "token": token,
        }
    })
}

export function cadastrarPost(token, post){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/posts",
        headers: {
            "token": token,
        },
        data: post
    })
}