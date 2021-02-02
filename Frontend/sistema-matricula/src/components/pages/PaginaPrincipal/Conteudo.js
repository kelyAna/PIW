import './Conteudo.css'

function Card({ nome, codigo }) {
    return (
        <div className="card">
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
        },
        {
            nome: "PIW",
            codigo: "QXD250",
        },
        {
            nome: "PS",
            codigo: "QXD251",
        }

    ]
    let cards = disciplinas.map((disciplina)=>(
                                <Card nome={disciplina.nome} codigo={disciplina.codigo}></Card>
                                )
                            )
    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
    )
}

export default Conteudo