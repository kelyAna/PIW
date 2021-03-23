import axios from 'axios'

export function usuarioByID(token){
    return axios({
        method: "GET",
        url: "http://localhost:8393/api/usuarios/:id",
        headers: {
            "token": token,
        }
    })
}