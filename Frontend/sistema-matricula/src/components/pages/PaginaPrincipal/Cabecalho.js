import './PaginaPrincipal.css'
function Cabecalho({paginaAtual}) {
    
    return (
        <div>
            <header className="fundo-azul">
                <h1>Matrícula UFC-QXD</h1>
                <span>Você está na {paginaAtual}</span>
            </header>
        </div>
    )
}

export default Cabecalho