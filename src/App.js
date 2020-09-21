import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Portal from './scenes/portal'
import Contact from './scenes/contacto'
import About from './scenes/about'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/'>
          <Portal />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
