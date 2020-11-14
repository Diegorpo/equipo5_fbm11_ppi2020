import React from 'react';
import Principal from '../src/pages/Principal.js';
import Menu from '../src/pages/Menu.js';
import Acerca  from '../src/pages/Acerca.js';
import Ayuda  from '../src/pages/Ayuda.js';
import Quejas from '../src/pages/Quejas.js'
import Ingreso  from '../src/pages/Ingreso.js';
import {
  BrowserRouter, Route,
  Switch,
} from 'react-router-dom';


function App() {
  return (
    <>
     <BrowserRouter>
        <Switch>
          <Route path="/Principal" exact>
            <Principal/>
          </Route>
          <Route path="/Menu" exact>
            <Menu/>
          </Route>
          <Route path="/Acerca" exact>
            <Acerca/>
          </Route>
          <Route path="/Ayuda" exact>
            <Ayuda/>
          </Route>
          <Route path="/Quejas" exact>
            <Quejas/>
          </Route>
          <Route path="/Ingreso" exact>
            <Ingreso/>
          </Route>
        </Switch>
        </BrowserRouter>
     </> 
  );
}

export default App;