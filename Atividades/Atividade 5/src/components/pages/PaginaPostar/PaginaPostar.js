import { Navegador } from '../../common/Navegador/Navegador'
import { FormPostar } from '../FormPostar/FormPostar'
import '../PaginaPostar/PaginaPostar.css'

export function PaginaPostar() {
    return(
        <div className="container-pagina-postar">
            <Navegador usuarioLogado="Ana Kely" ></Navegador>
            <FormPostar></FormPostar>
        </div>
    )
}