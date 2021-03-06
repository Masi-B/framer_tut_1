import "./App.css";
import Box1 from "./components/Box1/Box1";
import Box2 from "./components/Box2/Box2";
import Box3 from "./components/Box3/Box3";
import Box4 from "./components/Box4/Box4";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Box5 from "./components/Box5/Box5";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <section id="navbar">
            <NavBar></NavBar>
            
          </section>
          
          <section id="box-container">
            <Route exact path="/">
              <Box1></Box1>
            </Route>
          </section>
          <section>
            <Box2></Box2>
          </section>
          <section>
            <Box3></Box3>
          </section>
          <section id="box-container4">
            <Box4></Box4>
          </section>
          <section>
            <Box5></Box5>
          </section>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
