import { Navegador } from "../../common/Navegador/Navegador";
import Conteudo from './Conteudo'

import './PaginaPrincipal.css'

function PaginaPrincipal() {
    return (
        <div className="container">
            <Navegador usuarioLogado="Ana Kely" ></Navegador>
            <Conteudo></Conteudo>
        </div>
    )
}

export default (PaginaPrincipal)

