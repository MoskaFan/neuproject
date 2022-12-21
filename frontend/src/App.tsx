import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import NavigationBar from "./NavigationBar";
import {Typography} from "@mui/material";
import LoginPage from './LoginPage';
import OwnerUse from './OwnerUse';


function App() {

    const {login, addOwner} = OwnerUse()

  return (

      <BrowserRouter >
              <header className={"header"}>
                  <NavigationBar />
              </header>
                  <div>
                      <Routes>
                          <Route path = {"api/owners/register/"} element= {<SignUp addOwner={addOwner}/>}/>
                          <Route path={"api/owners/login"} element={<LoginPage login={login}/>} />
                      </Routes>
                  </div>


              <footer className={"footer"}>
                  <Typography variant="body2" color="text.secondary" align="center">
                      {'Copyright © '}
                      <Typography component="h1" variant="h5">
                          Iuliia Atutova
                      </Typography>{' '}
                      {new Date().getFullYear()}
                      {'.'}
                  </Typography>
              </footer>

      </BrowserRouter>

  );
}

export default App;
