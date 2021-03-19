import axios from 'axios'

export function listarDisciplinas(token) {
    return axios({
        method: "GET",
        url: "http://localhost:9790/disciplinas",
        headers: {
            "token": token,
        }
    })
}