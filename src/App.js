import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import MainCategoryModel from "./components/MainCategoryContainer/MainCategoryModel";
import SubCatagoryModel from "./components/SubCategoryContainer/SubCategoryModel";
// import SubAutocompleteModel from "./components/NewSubCategory/SubAutocompleteModel";
import WelcomePage from "./components/Welcome Page/WelcomePage";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact 
          path="/" 
          render={ () => 
            <WelcomePage
              title="Create a new Category Model"
              introduction="In this session you will be allow to create a Category Model" 
            />
          } />
        <Route path="/main-categories-page" component={MainCategoryModel} />

        {/* <Route 
          path="/sub-categories-page" 
          render={ () => 
            <SubAutocompleteModel
              suggestions={[
                "Alligator",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands"
              ]}
            
            />
          } /> */}
        
        <Route path="/sub-categories-page" component={SubCatagoryModel} />
      </Switch>
    </div>
  );
}


export default App;
