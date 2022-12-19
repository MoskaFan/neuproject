import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import NavigationBar from "./NavigationBar";
import {Typography} from "@mui/material";


function App() {



  return (

      <BrowserRouter >
              <header className={"header"}>
                  <NavigationBar />
              </header>
                  <div>
                      <Routes>
                      <Route path = {"owners/register/"} element= {<SignUp/>}/>
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
