import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Error404 from './Error404';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
