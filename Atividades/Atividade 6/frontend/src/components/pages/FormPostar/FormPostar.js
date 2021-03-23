import '../PaginaPostar/PaginaPostar.css'
import history from '../../../history'

import { AuthContext } from '../../../App'
import { useForm } from 'react-hook-form'
import { cadastrarPost } from '../../../api/postAPI'
import { useContext } from 'react'

export function FormPostar(props) {
    const { auth } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()

    
    const submeter = (post) => {
        cadastrarPost(auth.token, post).then((response) => {
            console.log(response)
            history.push("/")
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="container-form">
            <form onSubmit={handleSubmit(submeter)}>
                <textarea
                    name="texto"
                    cols="30"
                    rows="5"
                    ref={register}
                >
                </textarea>
                <br />

                <button type="submit">
                    Postar
                </button>
            </form>
        </div>
    )
}