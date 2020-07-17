import React from 'react';
import {BrowserRouter as Router , Route,Switch}  from 'react-router-dom';
import Home from './home';
import Servicios from './servicios';
import Portafolio from './portafolio';
const App =()=> {


    return (
      
     <>
      <Router>
                  <Switch>
          
          <Route path="/" exact component={Home}></Route>
          <Route path="/servicios" component={Servicios}></Route>
          <Route path="/portafolio" component={Portafolio}></Route>
          </Switch>
      </Router>
    </>
    );
  }
  
  export default App;