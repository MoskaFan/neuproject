import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import useOwner from "./UseOwner";
import NavigationBar from "./NavigationBar";

function App() {
    const {addOwner} = useOwner();
  return (

      <BrowserRouter >
          <div className={"App"}>
              <NavigationBar />
              <div><Routes>
                  <Route path = {"/api/owners/signup"} element= {<SignUp  addOwner={addOwner}/>}/>
              </Routes>
              </div>

          </div>


      </BrowserRouter>

  );
}

export default App;
