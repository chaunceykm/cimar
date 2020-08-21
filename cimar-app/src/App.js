import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { Home } from "./components/HomePage/Home";
import { Gallery } from "./components/petViews/Gallery";
import { PetProfile } from "./components/petViews/PetProfile";
import { Login } from "./components/auth/Login";
import { AdminDashboard } from "./components/AdminDashboard/AdminDashboard";
import { About } from "./components/About";
import { ContactUs } from "./components/ContactUs";
import { Calendar } from "./components/calendar/Calendar";
import { Foster } from "./components/FosterandAdopt/Foster";
import { Adopt } from "./components/FosterandAdopt/Adopt";
import { Donate } from "./components/Donations/Donate";
import { Application } from "./components/FosterandAdopt/Application/Application";
import { HappyTails } from "./components/HappyTails";
import { AddPet } from "./components/AdminDashboard/AddPet";
import { EditPet } from "./components/AdminDashboard/EditPet";
import { Messages } from "./components/AdminDashboard/Messages";
import { ViewApplications } from "./components/AdminDashboard/ViewApplications";
import { AddUser } from "./components/AdminDashboard/AddUser";
import { ViewFosters } from "./components/AdminDashboard/ViewFosters";
import { ViewDonors } from "./components/AdminDashboard/ViewDonors";
import { ViewExpenses } from "./components/AdminDashboard/ViewExpenses";
import { ViewAdopters } from "./components/AdminDashboard/ViewAdopters";
import { Resources } from "./components/Resources/Resources";

import { CimarContext } from "./context/CimarContext";
import { NavBar } from "./components/navigation/NavBar";
import { Footer } from "./components/Footer";
import { Layout } from "./Layout";
import "fontsource-noto-sans-jp";

function App() {
  // const { token } = useContext(CimarContext);
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pets" component={Gallery} />
              <Route path="/pets/:id" component={PetProfile} />
              <Route path="/happy-tails" component={HappyTails} />
              <Route path="/events" component={Calendar} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/resources" component={Resources} />
              <Route path="/donate" component={Donate} />
              <Route path="/about" component={About} />
              <Route exact path="/adopt" component={Adopt} />
              <Route exact path="/foster" component={Foster} />
              <Route path="/login" component={Login} />
              <Route path="/admin" component={AdminDashboard} />
              <Route path="/application" component={Application} />
            </Switch>
          </main>
          <Footer />
        </CssBaseline>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
