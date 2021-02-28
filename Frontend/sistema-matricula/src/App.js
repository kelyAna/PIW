import './App.css';
import { Router, Route } from 'react-router-dom'
import history from './history'

import { PaginaPrincipal }from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaListarMatriculas} from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';
import { PaginaBuscarMatricula } from './components/pages/PaginaBuscarMatricula/PaginaBuscarMatricula'

function App() {
  return (
    <Router history={history}>
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
    </Router>
  )
}

export default App;

