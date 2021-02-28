import { Navegador } from "../../common/Navegador/Navegador";
import Cabecalho from "../PaginaPrincipal/Cabecalho";

export function PaginaListarMatriculas() {
    return (
        <div>
            <Cabecalho paginaAtual="pagina de matricula"></Cabecalho>
            <Navegador></Navegador>
            <h1>Página de matrícula</h1>
        </div>
    )
}