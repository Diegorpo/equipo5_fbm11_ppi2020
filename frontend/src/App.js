import React from 'react';
import Principal from '../src/pages/Principal.js';
import Menu from '../src/pages/Menu.js';
import Acerca  from '../src/pages/Acerca.js';
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
        </Switch>
        </BrowserRouter>
     </> 
  );
}

export default App;