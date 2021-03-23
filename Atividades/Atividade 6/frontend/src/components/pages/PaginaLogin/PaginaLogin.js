import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { login } from '../../../api/auth'
import { AuthContext } from '../../../App'

import { Navegador } from '../../common/Navegador/Navegador'

import history from '../../../history';
import '../PaginaLogin/PaginaLogin.css'

function FormularioLogin(){
    const {register,handleSubmit} = useForm()
    const auth = useContext(AuthContext)

    const submeter = (login_data) => {
        login(login_data).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome})
            
            history.push("/")
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <form onSubmit={handleSubmit(submeter)}>
            E-mail: <input type="text" name="email" ref={register}/> <br/>
            Senha: <input type="password" name="senha" ref={register}/> <br/>
            <button type="submit">Logar</button>
        </form>
    )
}

export function PaginaLogin(){
    return(
        <div>
            <Navegador></Navegador>
            <FormularioLogin/>
        </div>
    )
}