import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import PaginaPrincipal from './components/pages/PaginaPrincipal/PaginaPrincipal';
import PaginaListarMatriculas from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas'
import { PaginaBuscarMatricula } from './components/pages/PaginaBuscarMatricula/PaginaBuscarMatricul';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
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
    </BrowserRouter>
  )
}

export default App;

