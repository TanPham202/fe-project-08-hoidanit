import './App.scss';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Switch>
            <Route path="/news"> News </Route>
            <Route path="/about"> About </Route>
            <Route path="/contact"> Contact </Route>
            <Route path="/login"> <Login /> </Route>
            <Route path="/" exact> Home </Route>
            <Route path="*"> 404 Not Found </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
