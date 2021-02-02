
function PaginaPrincipal() {
    let nome = "João";
    let link = (<a href="https://www.google.com/">Tio Google</a>)
    return (
        <div>
            <nav>
                <a href="https://www.google.com/">Link 1</a>
                <a href="https://www.google.com/">Link 2</a>
                <a href="https://www.google.com/">Link 3</a>
            </nav>

            <div>
                <p>
                    Meu conteúdo {2+4} nome: {nome}
                    link: {link}
                </p>
                
            </div>
        </div>
    )
}

export default PaginaPrincipal;