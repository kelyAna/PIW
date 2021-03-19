import './App.css';
import { Router, Route, Redirect } from 'react-router-dom'
import { createContext, useState } from 'react'
import history from './history'

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';
import { PaginaBuscarMatricula } from './components/pages/PaginaBuscarMatricula/PaginaBuscarMatricula'
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
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
            <PaginaPrincipal/>
          }
        </Route>

        <Route
          exact
          path="/matriculas">
          <PaginaListarMatriculas></PaginaListarMatriculas>
        </Route>

        <Route
          path="/matriculas/:id"
          component={PaginaBuscarMatricula}
        >
        </Route>

        <Route
          path="/cadastro/"
          component={PaginaCadastro}
        >
        </Route>

        <Route
          path="/login/"
          component={PaginaLogin}
        >
        </Route>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;

