import { Navegador } from "../../common/Navegador/Navegador";
import Cabecalho from "./Cabecalho";
import Conteudo from './Conteudo'

import './PaginaPrincipal.css'

function PaginaPrincipal() {
    return (
        <div>
            <Cabecalho paginaAtual="pagina de matricula"></Cabecalho>
            <Navegador></Navegador>
            <Conteudo></Conteudo>
        </div>
    )
}

export default (PaginaPrincipal)

