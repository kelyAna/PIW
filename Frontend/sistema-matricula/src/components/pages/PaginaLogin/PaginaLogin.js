import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { login } from '../../../api/auth'
import { AuthContext } from '../../../App'
import { Navegador } from '../../common/Navegador/Navegador';

import Cabecalho from "../PaginaPrincipal/Cabecalho";
import history from '../../../history';

export function FormularioLogin(){
    const {register,handleSubmit} = useForm()
    const auth = useContext(AuthContext)

    const submeter = (login_data) => {
        login(login_data).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome})
            //console.log(response.data.token)
            history.push("/")
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <form onSubmit={handleSubmit(submeter)}>
            Matrícula: <input type="text" name="matricula" ref={register}/> <br/>
            Senha: <input type="password" name="senha" ref={register}/> <br/>
            <button type="submit">Logar</button>
        </form>
    )
}

export function PaginaLogin(){
    return(
        <div>
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>
            <FormularioLogin></FormularioLogin>
        </div>
    )
}