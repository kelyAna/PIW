import './Navegador.css'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react';

import {AuthContext} from '../../../App'

function NavegadorNaoLogado() {
    return (
        <div>
            <nav className="navegador">
                <NavLink className="link-navegador"
                    to={"/cadastro/"}
                    style={{ "marginLeft": "auto" }}>
                    Cadastrar
                </NavLink>

                <NavLink className="link-navegador"
                    to={"/login/"}>
                    Login
                </NavLink>
            </nav>
        </div >
    )
}

function NavegadorLogado({nome}) {
    const {setAuth} = useContext(AuthContext)

    return (
        <>
            <nav className="navegador">
                <NavLink
                    exact
                    className="link-navegador"
                    to="/">
                    Página Inicial
                </NavLink>

                <NavLink className="link-navegador"
                    to={"/matriculas"}>
                    Listar Matrículas
                </NavLink>

                <NavLink className="link-navegador"
                    to={"/matriculas"}>
                    Página de Matricula
                </NavLink>

                <span className="link-navegador" 
                    style={{ "marginLeft": "auto" }}
                    onClick={()=>{setAuth({token:null, nome: null})}}
                    >
                    Logout
                </span>
                <span>
                    {nome}
                </span>
            </nav>
        </>
    )
}

export function Navegador() {
    const {auth} = useContext(AuthContext);
    return(
        <>
            {
                auth.token === null ? <NavegadorNaoLogado></NavegadorNaoLogado> :
                <NavegadorLogado nome={auth.nome}></NavegadorLogado>
            }
        </>
    )
}