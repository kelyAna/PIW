import './Navegador.css'

import { Link, NavLink } from 'react-router-dom'

export function Navegador() {
    let id = 15;

    return (
        <div>
            <nav className="navegador">
                <NavLink 
                    exact
                    className="link-navegador"
                    to="/">
                    Página inicial
                </NavLink>

                <NavLink className="link-navegador"
                    to={"/matriculas/" + id}>
                    Listar matrículas
                </NavLink>
            </nav>
        </div>
    )
}
