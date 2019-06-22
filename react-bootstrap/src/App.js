import React from 'react';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Contact } from './Contact';
import { About } from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
