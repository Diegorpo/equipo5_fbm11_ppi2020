import React from 'react';
import Principal from '../src/pages/Principal.js';
import Menu from '../src/pages/Menu.js';

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
         
        </Switch>
        </BrowserRouter>
     </> 
  );
}

export default App;