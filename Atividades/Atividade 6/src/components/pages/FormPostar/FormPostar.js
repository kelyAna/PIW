import '../PaginaPostar/PaginaPostar.css'
import { NavLink } from 'react-router-dom'

export function FormPostar() {
    return (
        <div className="container-form">
            <form action="">
                <textarea name="" id="" cols="30" rows="5">Escreva sua mensagem...</textarea>
                <br />
                <NavLink
                    exact
                    to="/"
                >
                    <button type="submit">Postar</button>
                </NavLink>
            </form>
        </div>
    )
}