import classNames from 'classnames'
import history from './../../../history'

import './PaginaPrincipal.css'


function Card({ nome, codigo, disponivel }) {
    let nomeClasses = classNames("card",{
        "fundo-vermelho": !disponivel,
    })
    
    function cardClicado(){
        //console.log("Card clicado!")
        history.push("/matriculas")
    }

    return (
        <div className={nomeClasses} onClick={cardClicado}>
            <h3 className="titulo-card">{nome}</h3>
            <span className="codigo-card">{codigo}</span>
        </div>
    )
}

function Conteudo() {
    let disciplinas = [
        {
            nome: "LMS",
            codigo: "QXD253",
            disponivel: false
        },
        {
            nome: "PIW",
            codigo: "QXD250",
            disponivel: true
        },
        {
            nome: "PS",
            codigo: "QXD251",
            disponivel: false
        }

    ]
    let cards = disciplinas.map((disciplina) => (
        <Card
            nome={disciplina.nome}
            codigo={disciplina.codigo}
            disponivel={disciplina.disponivel}
        >

        </Card>
    )
    )
    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
    )
}

export default Conteudo;