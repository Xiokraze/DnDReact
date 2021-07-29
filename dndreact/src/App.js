import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import React, {Suspense} from 'react';
import ActivityIndicator from './Components/ActivityIndicator/ActivityIndicator';
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <Switch>
          <Route path="/" exact><HomePage/></Route>
        </Switch>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
