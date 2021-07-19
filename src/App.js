import React from 'react'
import './App.scss';
import { Grid, TextField, Button , } from '@material-ui/core';

import { makeStyles} from '@material-ui/core/styles';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {


  const [operands, setOperands] = React.useState([])
  const [operator, setOperator] = React.useState(null);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Screen1/>
          </Route>
          <Route path="/screen1/" >
            <Screen1/>
          </Route>
          <Route path="/screen2/" >
            <Screen2/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
