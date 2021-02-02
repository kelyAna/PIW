import './PaginaPrincipal.css'
function Cabecalho({paginaAtual}) {
    
    return (
        <div>
            <header className="cabecalho">
                <h1 className="logo">Matrícula UFC-QXD</h1>
                <span className="pagina-atual">Você está na {paginaAtual}</span>
            </header>
        </div>
    )
}

export default Cabecalho