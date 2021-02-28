import './App.css';
import { Router, Route } from 'react-router-dom'
import history from './history'

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';

function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>

      <Route exact path="/postar">
        <PaginaPostar></PaginaPostar>
      </Route>
    </Router>
  )
}

export default App;

