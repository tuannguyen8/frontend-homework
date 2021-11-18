import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './NavBar';
import Home from "./Home"
import Search from "./Search"
import Houses from "./Houses"
//import * as ReactBootStrap from "react-bootstrap"
function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/houses' component={Houses} />
      </Switch>
    </Router>

  );
}
export default App;