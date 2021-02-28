import './Navegador.css'

import { NavLink } from 'react-router-dom'

export function Navegador(props) {
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
                    <span className="usuarioLogado">{props.usuarioLogado}</span>
                </div>

            </nav>

        </div>
    )
}
