import './App.css';
import history from './history'
import { Router, Route, Redirect } from 'react-router-dom'
import { createContext, useState } from 'react'

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro'
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';

export const AuthContext = createContext(null)

function App() {
  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), nome: localStorage.getItem("nome") })

  const setAuthLS = (newAuth) => {
    setAuth(newAuth)
    localStorage.setItem("token", newAuth.token)
    localStorage.setItem("nome", newAuth.nome)
  }

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuthLS }}>
      <Router history={history}>
        <Route exact path="/">
          {
            auth.token === null ? <Redirect to="/login" /> :
              <PaginaPrincipal />
          }
        </Route>

        <Route exact path="/postar">
          <PaginaPostar/>
        </Route>

        <Route exact path="/cadastro">
          <PaginaCadastro />
        </Route>

        <Route exact path="/login">
          <PaginaLogin />
        </Route>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;

