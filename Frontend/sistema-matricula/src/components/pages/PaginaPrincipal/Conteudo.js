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
    /*
        let listaLis = []
        for(let i=0; i<disciplinas.length; i++){
        listaLis.push(<li>{disciplinas[i].nome} - {disciplinas[i].codigo}</li>)
    }
    */
    let listaDisciplinas = disciplinas.map((disciplina)=>(<li>{disciplina.nome} - {disciplina.codigo}</li>))
    return (
        <div>
            <ul>
                {listaDisciplinas}
            </ul>
        </div>
    )
}

export default Conteudo