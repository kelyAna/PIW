function Conteudo() {
    let nome = "João";
    let link = (<a href="https://www.google.com/">Tio Google</a>)
    return (
        <p>
            Meu conteúdo {2 + 4} nome: {nome}
            link: {link}
        </p>
    )
}

export default Conteudo