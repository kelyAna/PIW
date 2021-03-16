import { useState } from 'react'

import { Navegador } from "../../common/Navegador/Navegador";
import Cabecalho from "./Cabecalho";
import Conteudo from './Conteudo'

import './PaginaPrincipal.css'

function Botao(){
    const [count, setCount] = useState(0)

    function incrementarCount(){
        setCount(count+1)
    }

    return <button onClick={incrementarCount}>
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



