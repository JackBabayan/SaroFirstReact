import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';


import Main from './Components/main/main';
import Login from './Components/main/formComponent/LogIn';
import NotFound from './Components/NotFound';
import SingUp from './Components/Signup/Signup'


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <Route path="/main" component={Main}/>
          <Route path="/signup" component={SingUp}/>
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;