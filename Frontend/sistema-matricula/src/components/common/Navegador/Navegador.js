import './Navegador.css'

import { Link, NavLink } from 'react-router-dom'

export function Navegador() {
    return (
        <div>
            <nav className="navegador">
                <NavLink 
                    exacts
                    className="link-navegador"
                    to="/">
                    Página inicial
                </NavLink>

                <Link className="link-navegador"
                    to="/matriculas">
                    Listar matrículas
                </Link>
            </nav>
        </div>
    )
}
