import React from 'react';
import Principal from './pages/Principal';
import Nosotros from './pages/Nosotros';
import Iniciarsesion from './pages/Iniciarsesion';
import Registro from './pages/Registro';
import {
  BrowserRouter, Route,
  Switch,
} from 'react-router-dom';


function App() {
  return (
    <>
     <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Principal/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/> 
          </Route>
          <Route path="/sesion">
              <Iniciarsesion/>
          </Route>
          <Route path="/registro">
              <Registro/>
          </Route>

        </Switch>
        </BrowserRouter>
     </>
   
    
  );
}

export default App;