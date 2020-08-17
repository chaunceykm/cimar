import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CimarContext } from "./context/CimarContext";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { NavBar } from "./components/navigation/NavBar";
import { Home } from "./components/Home/Home";
import { Gallery } from "./components/petViews/Gallery";
import { PetProfile } from "./components/petViews/PetProfile";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { AdminDashboard } from "./components/AdminDashboard/AdminDashboard";
import { About } from "./components/About";
import { ContactUs } from "./components/ContactUs";
import { Calendar } from "./components/calendar/Calendar";
import { Foster } from "./components/FosterandAdopt/Foster";
import { Adopt } from "./components/FosterandAdopt/Adopt";

function App() {
  const { token } = useContext(CimarContext);
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline>
          <Switch>
            <Route exact to="/" component={LandingPage} />
            <Route to="/home" component={Home} />
            <Route to="pets" component={Gallery} />
            <Route to="/pets/:id" component={PetProfile} />
            <Route to="/calendar" component={Calendar} />
            <Route to="/contact" component={ContactUs} />
            <Route to="/about" component={About} />
            <Route to="/adopt" component={Adopt} />
            <Route to="/foster" component={Foster} />
            <ProtectedRoute to="/admin" component={AdminDashboard} />
          </Switch>
        </CssBaseline>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
