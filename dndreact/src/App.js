import "./App.css";
import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import ActivityIndicator from "./Components/ActivityIndicator/ActivityIndicator";
import HeaderNavBar from "./Components/HeaderNavBar/HeaderNavBar";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <HeaderNavBar />
        <Switch>
          <Route path="/" exact><HomePage/></Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
