import React,{ useState, useEffect } from "react";
import Home from "./pages/home/Home"
import Dashboard from "./pages/dashboard/Dashboard"
import { Switch, Route, Redirect } from "react-router-dom"
import Admin from "./layouts/Admin.js";
import RTL from "./layouts/RTL.js";
import "./assets/css/material-dashboard-react.css?v=1.10.0";


import "./App.css";

export default function App(){

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/admin/dashboard" />
        

      </Switch>
    </div>
  );
};

