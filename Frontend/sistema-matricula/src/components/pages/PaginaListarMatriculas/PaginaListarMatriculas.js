import { useForm } from 'react-hook-form'

import { Navegador } from "../../common/Navegador/Navegador";
import Cabecalho from "../PaginaPrincipal/Cabecalho";

function FormularioMatricula(){

    const {register, handleSubmit} = useForm()
    const submeter = (data) => {console.log(data)}

    return <form onSubmit={handleSubmit(submeter)}>
        Nome: <input name="nome" type="text" ref={register}/> <br/>
        Disciplina: 
        <select name="disciplina" id="" ref={register}>
            <option value="LMS">LMS</option>
            <option value="PIW">PIW</option>
            <option value="IHC">IHC</option>
        </select>
        <br/>
        <button type="submit">Submit</button>
    </form>
}
export function PaginaListarMatriculas() {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>
            <h1>Página de matrícula</h1>
            <FormularioMatricula></FormularioMatricula>
        </div>
    )
}