// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {

  function fn() {
    console.log(window.a.b);
  }
  
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/:id">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Router path="/about/">
            <button onClick={fn}>Break the world</button>
          </Router>
          <Router path="/">
            home
          </Router>
        </Switch>
      </>
    </Router>
  );
}

export default App;
