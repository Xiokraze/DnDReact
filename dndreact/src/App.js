import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import ActivityIndicator from "./Components/ActivityIndicator/ActivityIndicator";
import HeaderNavBar from "./Components/HeaderNavBar/HeaderNavBar";
import HomePage from "./Components/HomePage/HomePage";
import Items from "./Components/Items/Items";
import Spells from "./Components/Spells/Spells";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <HeaderNavBar />
        <Switch>
          <Route path="/" exact><HomePage/></Route>
          <Route path="/items" exact><Items/></Route>
          <Route path="/items/armor" exact><Items/></Route>
          <Route path="/items/art" exact><Items/></Route>
          <Route path="/items/gems" exact><Items/></Route>
          <Route path="/items/generalItems" exact><Items/></Route>
          <Route path="/items/trinkets" exact><Items/></Route>
          <Route path="/items/weapons" exact><Items/></Route>
          <Route path="/spells" exact><Spells/></Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
