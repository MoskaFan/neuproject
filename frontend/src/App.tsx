import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import NavigationBar from "./NavigationBar";
import {LoginData} from "./modell/LoginData";
import axios from 'axios';


function App() {


    function addOwner(newOwner: LoginData){
        axios.post("/api/owners/signup/", newOwner)

            .catch(console.error)
    }
  return (

      <BrowserRouter >
              <header className={"App"}>
                  <NavigationBar />
              </header>
                  <div>
                      <Routes>
                      <Route path = {"/api/owners/signup"} element= {<SignUp  addOwner={addOwner}/>}/>
                      </Routes>
                  </div>


              <footer>

              </footer>

      </BrowserRouter>

  );
}

export default App;
