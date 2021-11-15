import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './NavBar';
import Home from "./Home"
import Search from "./Search"
import Houses from "./Houses"
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/houses' component={Houses} />
      </Switch>
    </Router>
  );
}
export default App;