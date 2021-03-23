import axios from 'axios'

export function cadastroUsuario(usuario){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/usuarios",
        data: usuario,
    })
}

export function login(login_data){
    return axios({
        method: "POST",
        url: "http://localhost:8393/api/usuario/signin",
        data: login_data,
    })
}