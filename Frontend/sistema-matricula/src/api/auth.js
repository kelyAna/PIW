import axios from 'axios'

export function cadastro(aluno){
    return axios({
        method: "POST",
        url: "http://localhost:9790/alunos",
        data: aluno,
    })
}

export function login(login_data){
    return axios({
        method: "POST",
        url: "http://localhost:9790/alunos/signin",
        data: login_data,
    })
}