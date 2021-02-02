
export function Navegador() {
    let Link = (linkTexto) => (<a className="link-navegador" href="https://www.google.com/">{linkTexto}</a>)
    return (<div>
            <nav>
                <Link linkTexto="Inicio"></Link>
            </nav>
        </div>
    )    
}
