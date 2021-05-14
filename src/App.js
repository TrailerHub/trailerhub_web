import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home.js';
import ToS from './pages/tos';
import PP from './pages/pp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/privacypolicydoc.html" component={PP} />
        <Route exact path="/termsofservicedoc.html" component={ToS} />
      </Switch>
    </Router>
  );
}

export default App;
