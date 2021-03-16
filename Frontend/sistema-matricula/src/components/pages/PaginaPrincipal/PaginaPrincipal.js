import { useState } from 'react'

import { Navegador } from "../../common/Navegador/Navegador";
import Cabecalho from "./Cabecalho";
import Conteudo from './Conteudo'

import './PaginaPrincipal.css'

function Botao() {
    const [count, setCount] = useState(0)
    const [clicado, setClicado] = useState(false)

    const clicouBotao = () => {
        setCount(count+1)
        setClicado(true)
    }

    let estilo = {}
    if(clicado===true){
        estilo["background-color"] = "white"
        estilo["border"] = "none"
        estilo["padding"] = "15px"
        estilo["color"] = "gray"
        estilo["border-radius"] = "4px"
    } else{
        estilo["background-color"] = "pink"
        estilo["border"] = "none"
        estilo["padding"] = "15px"
        estilo["color"] = "gray"
        estilo["border-radius"] = "4px"
    }

    return <button onClick={clicouBotao} style={estilo}>
        Eu fui pressionado {count} vezes
    </button>
}

export function PaginaPrincipal() {
    return (
        <div>
            <Cabecalho paginaAtual="pagina de matricula"></Cabecalho>
            <Navegador></Navegador>
            <Conteudo></Conteudo>
            <Botao></Botao>
        </div>
    )
}



