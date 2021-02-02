import './Navegador.css'

export function Navegador() {
    let Link = ({linkTexto}) => (<a className="link-navegador" href="https://www.google.com/">{linkTexto}</a>)
    return (<div>
            <nav className="navegador">
                <Link linkTexto="Link 1" className="link-navegador"></Link>
                <Link linkTexto="Link 2" className="link-navegador"></Link>
                <Link linkTexto="Link 3" className="link-navegador"></Link>
            </nav>
        </div>
    )    
}
