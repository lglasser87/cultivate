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
          <Route path="/plants" exact>
            <Plants />
          </Route>
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/plants/:id" exact>
            <PlantDetails />
          </Route>
          <Route path="/blogs/:id" exact>
            <BlogDetails />
          </Route>
          <Route path ="/login" exact>
            <Authentication />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
