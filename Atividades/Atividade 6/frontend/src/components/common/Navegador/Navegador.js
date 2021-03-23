import './Navegador.css'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react';

import { AuthContext } from '../../../App'

function NavegadorNaoLogado() {
    return (
        <div>
            <nav className="navegador">
                <div className="logo">
                    <span>Rede Social</span>
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="botoes">
                    <NavLink
                        exact
                        className="link-navegador"
                        to="/cadastro"
                    >
                        Cadastrar-se
                    </NavLink>

                    <NavLink
                        exact
                        className="link-navegador"
                        to="/login"
                    >
                        Logar
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

function NavegadorLogado({ nome }) {
    const { setAuth } = useContext(AuthContext)

    return (
        <div>
            <nav className="navegador">
                <div className="logo">
                    <span>Rede Social</span>
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="botoes">
                    <NavLink
                        exact
                        className="link-navegador"
                        to="/"
                    >
                        Linha do tempo
                    </NavLink>

                    <NavLink
                        exact
                        className="link-navegador"
                        to="/postar"
                    >
                        Postar
                    </NavLink>

                    <NavLink
                        exact
                        className="link-navegador"
                        to="/login"
                        onClick={() => {
                            setAuth({ token: null, nome: null })
                        }}
                    >
                        Logout
                    </NavLink>

                    <span className="link-navegador">
                        {nome}
                    </span>
                </div>
            </nav>

        </div>
    )
}
export function Navegador() {
    const { auth } = useContext(AuthContext);

    return (
        <div>
            {
                auth.token === null ? <NavegadorNaoLogado></NavegadorNaoLogado> :
                    <NavegadorLogado nome={auth.nome} ></NavegadorLogado>
            }
        </div>
    )
}
