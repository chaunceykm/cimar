import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { Home } from './components/Home/Home'
import { Gallery} from './components/Gallery'
import { PetProfile} from './components/PetProfile'

function App() {
  return (
    <Router>
      <CssBaseline>
        <Switch>
          <Route exact to='/' component={Home} />
          <Route to='gallery' component={Gallery} />
          <Route to='/pet-profile/:id' component={PetProfile} />
        </Switch>
      </CssBaseline>
    </Router>
  );
}

export default App;
