import React from 'react';
import {Switch,HashRouter as Router,Route,Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <Router>
          <Link to='/'>home</Link>
          <Link to='/page2'>2</Link>
        <Switch>
          <Route exact path='/' component={()=>{return <h1>Home page</h1>}}/>
          <Route exact path='/page2' component={()=>{return <h1>page2</h1>}}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
