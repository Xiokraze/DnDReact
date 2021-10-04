import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import ActivityIndicator from "./Components/ActivityIndicator/ActivityIndicator";
import HeaderNavBar from "./Components/HeaderNavBar/HeaderNavBar";
import HomePage from "./Components/HomePage/HomePage";
import Items from "./Components/Items/Items";
import Spells from "./Components/Spells/Spells";
import Spell from "./Components/Spells/Spell";
import Generators from "./Components/RandomGenerators/Generators";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <HeaderNavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/items" exact>
            <Items />
          </Route>
          <Route path="/spells" exact>
            <Spells />
          </Route>
          <Route path="/spell" exact>
            <Spell />
          </Route>
          <Route path="/generators" exact>
            <Generators />
          </Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
