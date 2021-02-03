import './Navegador.css'


export function Navegador(props) {
    let Link = (props) => (
        <li>
            <a className={props.linkClasse} href={props.caminho}>{props.linkTexto}</a>
        </li>
    )
    return (
        <div>
            <nav className="navegador">
                <div className="logo">
                    <span>Rede Social 📱</span>
                </div>
                <Link linkTexto="Linha do tempo" linkClasse="link-linha" caminho="https://www.google.com/"></Link>
                <Link linkTexto="Postar" linkClasse="link-navegador" caminho="https://www.google.com/"></Link>
                <span className="usuarioLogado">Olá, {props.usuarioLogado}</span>
            </nav>

        </div>
    )
}
