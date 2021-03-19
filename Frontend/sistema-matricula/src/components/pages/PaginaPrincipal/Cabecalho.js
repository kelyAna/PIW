import './PaginaPrincipal.css'

function Cabecalho({ paginaAtual }) {
    return (
        <div>
            <header className="cabecalho">
                <img src="/logo.png" alt=""/>
                <span className="pagina-atual"></span>
            </header>
        </div>
    )
}

export default Cabecalho;