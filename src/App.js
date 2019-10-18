import React from 'react';
import './App.css';
import Home from './Components/Routes/Home'
import { Route, Switch, withRouter} from 'react-router-dom'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //       Learn React
    //       <Timer/>
    //   </header>
    // </div>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  );
}

export default withRouter(App);
