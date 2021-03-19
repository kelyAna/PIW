import history from '../../../history'

import { useForm } from 'react-hook-form'

import Cabecalho from "../PaginaPrincipal/Cabecalho";
import { Navegador } from '../../common/Navegador/Navegador';

import { cadastro } from '../../../api/auth';

function FormularioCadastro(){
    const {register, handleSubmit} = useForm()
    const submeter = (aluno) => {
        cadastro(aluno).then((response)=>{
            console.log(response)
            history.push('/login')
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <form onSubmit={handleSubmit(submeter)}>
            Nome: <input type="text" name="nome" ref={register}/> <br/>
            Matricula: <input type="text" name="matricula" ref={register}/> <br/>
            Senha: <input type="password" name="senha" ref={register}/> <br/>
            <button type="submit">Cadastrar</button>
        </form>
    )
}

export function PaginaCadastro(){
    return(
        <div>
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>
            <FormularioCadastro></FormularioCadastro>
        </div>
    )
}