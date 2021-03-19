import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Navegador } from '../../common/Navegador/Navegador';
import { inserirMatricula, listarMatriculas } from '../../../api/matriculasAPI'

import Cabecalho from "../PaginaPrincipal/Cabecalho";
import { AuthContext } from '../../../App';
import { listarDisciplinas } from '../../../api/disciplinasAPI';

function FormularioMatricula({ onSubmeter }) {
    const [disciplinas, setDisciplinas] = useState([])

    const { auth } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const submeter = (matricula) => { onSubmeter(matricula) }

    useEffect(() => {
        listarDisciplinas(auth.token).then(
            (response) => {
                setDisciplinas(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }, [])

    return <form onSubmit={handleSubmit(submeter)}>
        Disciplina:
        <select name="disciplina" id="" ref={register}>
            {disciplinas.map(
                (disciplina) => (
                    <option value={disciplina.id} name="disciplina">
                        {disciplina.nome}
                    </option>
                ))
            }
        </select>
        <br />
        <button type="submit">Matricular-se</button>
    </form>
}

function ListarMatriculas({matriculas}) {
    let lista = matriculas.map((matricula)=>(<li>{matricula.aluno.nome} - {matricula.disciplina.nome}</li>))
    return (
        <ul>
            {lista}
        </ul>
    )
}

export function PaginaListarMatriculas() {
    const [matriculas, setMatriculas] = useState([])

    const { auth } = useContext(AuthContext)

    const atualizarMatriculas = () => {
        listarMatriculas(auth.token).then(
            (response) => {
                setMatriculas(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        atualizarMatriculas()
    },[])

    const adicionarMatricula = (matricula) => {
        inserirMatricula(auth.token, matricula).then(
            (response) => {
                atualizarMatriculas()
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <div>
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>
            <ListarMatriculas matriculas={matriculas}></ListarMatriculas>
            <FormularioMatricula onSubmeter={adicionarMatricula}></FormularioMatricula>
        </div>
    )
}