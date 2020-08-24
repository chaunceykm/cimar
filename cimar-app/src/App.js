import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { Home } from "./components/publicFacing/HomePage/Home";
import { Gallery } from "./components/publicFacing/petViews/Gallery";
import { PetProfile } from "./components/publicFacing/petViews/PetProfile";
import { Login } from "./components/auth/Login";
import { AdminDashboard } from "./components/AdminDashboard/AdminDashboard";
import { About } from "./components/publicFacing/About";
import { ContactUs } from "./components/publicFacing/ContactUs";
import { Calendar } from "./components/publicFacing/calendar/Calendar";
import { Foster } from "./components/publicFacing/FosterandAdopt/Foster";
import { Adopt } from "./components/publicFacing/FosterandAdopt/Adopt";
import { Donate } from "./components/publicFacing/Donations/Donate";
import { Application } from "./components/publicFacing/FosterandAdopt/Application/Application";
import { HappyTails } from "./components/publicFacing/HappyTails";
import { AddPet } from "./components/AdminDashboard/AddPet";
import { EditPet } from "./components/AdminDashboard/EditPet";
import { Messages } from "./components/AdminDashboard/Messages";
import { ViewApplications } from "./components/AdminDashboard/ViewApplications";
import { AddUser } from "./components/AdminDashboard/AddUser";
import { ViewFosters } from "./components/AdminDashboard/ViewFosters";
import { ViewDonors } from "./components/AdminDashboard/ViewDonors";
import { ViewExpenses } from "./components/AdminDashboard/ViewExpenses";
import { ViewAdopters } from "./components/AdminDashboard/ViewAdopters";
import { Resources } from "./components/publicFacing/Resources/Resources";
import { CimarContext } from "./context/CimarContext";
import { AdminLayout } from "./AdminLayout";
import { MainLayout } from "./MainLayout";
import "fontsource-noto-sans-jp";

function App() {
  // const { token } = useContext(CimarContext);
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CssBaseline>
          <main>
            <Switch>
              <Route>
                <MainLayout>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/pets" component={Gallery} />
                    <Route path="/pets/profile" component={PetProfile} />
                    <Route path="/happy-tails" component={HappyTails} />
                    <Route path="/events" component={Calendar} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/about" component={About} />
                    <Route exact path="/adopt" component={Adopt} />
                    <Route exact path="/foster" component={Foster} />
                    <Route path="/application" component={Application} />
                    <Route path="/login" component={Login} />
                  </Switch>
                </MainLayout>
              </Route>
              <Route path="/admin/:path?" exact>
                <AdminLayout>
                  <Switch>
                    <ProtectedRoute path="/admin" component={AdminDashboard} />
                    <ProtectedRoute path="/admin/pets/add" component={AddPet} />
                    <ProtectedRoute path="/admin/pets/edit" component={EditPet} />
                    <ProtectedRoute path="/admin/users/add" component={AddUser} />
                  </Switch>
                </AdminLayout>
              </Route>
            </Switch>
          </main>
        </CssBaseline>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
