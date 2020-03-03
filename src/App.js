
import React from 'react';
import './App.css';
import About from './Components/About'
import Home from './Components/Home'
import SpecialThanks from './Components/SpecialThanks'
import {BrowserRouter as Router,
        Switch,
        Route,
        Link
      } from "react-router-dom"


class App extends React.Component {
  constructor(){
    super()


    this.consoleTest = this.consoleTest.bind(this)

  }

  consoleTest(){
    console.log(this.employees)
  }

  render(){
  return (

    <Router>
    <div className="routes">
      <nav>
        <ul>

          <li>
          <Link to ="/Home">Home </Link>
          </li>


          <li>
          <Link to ="/About">About </Link>
          </li>


          <li>
          <Link to ="/SpecialThanks"> SpecialThanks </Link>
          </li>


        </ul>
      </nav>

    <Switch>


    <Route exact path="/Home" component={Home}/>

    <Route path="/About" component={About}/>

    <Route path="/SpecialThanks" component={SpecialThanks}/>

    </Switch>

      </div>

  </Router>
  );
}
}
export default App;
