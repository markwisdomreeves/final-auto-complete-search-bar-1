import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import MainCategoryModel from "./components/MainCategoryContainer/MainCategoryModel";
import SubCatagoryModel from "./components/SubCategoryContainer/SubCategoryModel";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainCategoryModel} />
        <Route path="/sub-categories-page" component={SubCatagoryModel} />
      </Switch>
    </div>
  );
}


export default App;
