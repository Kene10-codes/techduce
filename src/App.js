import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'

import './App.css';

const  App = () => {
  return (
    <Router>
     <Switch>
        <Route exact path='/' >
          <Home/>
        </Route>
     </Switch>
    </Router>
  );
}

export default App;
