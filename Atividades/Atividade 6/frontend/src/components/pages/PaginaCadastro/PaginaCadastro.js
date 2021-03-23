import history from '../../../history'

import { useForm } from 'react-hook-form'
import { Navegador } from '../../common/Navegador/Navegador'
import { cadastroUsuario } from '../../../api/auth'

function FormularioCadastro(){
    const {register, handleSubmit} = useForm()

    const submeter = (usuario) => {
        cadastroUsuario(usuario).then((response)=>{
            console.log(response)
            history.push('/login')
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <form onSubmit={handleSubmit(submeter)}>
            Nome: <input type="text" name="nome" ref={register}/> <br/>
            E-mail: <input type="text" name="email" ref={register}/> <br/>
            Senha: <input type="password" name="senha" ref={register}/> <br/>
            <button type="submit">Cadastrar-se</button>
        </form>
    )
}

export function PaginaCadastro(){
    return(
        <div>
            <Navegador/>
            <FormularioCadastro/>
        </div>
    )
}