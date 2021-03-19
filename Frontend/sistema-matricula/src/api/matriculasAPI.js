import axios from 'axios'

export function listarMatriculas(token) {
    return axios({
        method: "GET",
        url: "http://localhost:9790/matricula",
        headers: {
            "token": token,
        }
    })
}

export function inserirMatricula(token, matricula) {
    return axios({
        method: "POST",
        url: "http://localhost:9790/matricula",
        headers: {
            "token": token,
        },
        data: matricula
    })
}