import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import MainNav from "./components/Navigation/MainNav";
import Dashboard from "./pages/Dashboard";
import Plants from "./pages/Plants";
import Blogs from "./pages/Blogs"
import Favorites from "./pages/Favorites";
import PlantDetails from './pages/PlantDetails';
import BlogDetails from './pages/BlogDetails';
import Authentication from "./pages/Authentication";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <Router>
      <div>
        <MainNav />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/plantdetails">
            <PlantDetails />
          </Route>
          <Route path="/blogdetails">
            <BlogDetails />
          </Route>
          <Route path ="/login">
            <Authentication />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
