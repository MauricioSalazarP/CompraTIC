import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Inicio from './components/pages/Inicio/Inicio';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/inicio' exact component={Inicio}/>
      </Switch>  
    </Router>
    
    
  );
}

export default App;
