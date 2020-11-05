import React from 'react';
import Principal from '../src/pages/Principal';

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
         
        </Switch>
        </BrowserRouter>
     </> 
  );
}

export default App;