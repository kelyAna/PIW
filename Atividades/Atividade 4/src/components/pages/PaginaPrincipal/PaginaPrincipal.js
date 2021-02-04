import { Navegador } from "../../common/Navegador/Navegador";
import LinhaDoTempo  from '../LinhaDoTempo/LinhaDoTempo'

import './PaginaPrincipal.css'

function PaginaPrincipal() {
    return (
        <div className="container">
            <Navegador usuarioLogado="Ana Kely" ></Navegador>
           <LinhaDoTempo></LinhaDoTempo>
        </div>
    )
}

export default (PaginaPrincipal)

