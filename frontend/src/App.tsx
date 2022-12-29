import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import NavigationBar from "./NavigationBar";
import {Typography} from "@mui/material";
import LoginPage from './LoginPage';

import AddLocation from './AddLocation';


import UserOwner from './hooks/UserOwner';
import { LocationData } from './entity/LocationData';
import LocationGallery from './LocationGallery';
import axios from 'axios';
import LocationUse from "./hooks/LocationUse";


function App() {

    const {login, addOwner} = UserOwner()
    const {addLocation} = LocationUse()
    const [locations, setLocations] = useState<LocationData[]>([])

    useEffect(() => {
        getLocations()
    }, [])

    function getLocations() {
        axios.get('/api/locations/')
            .then((response) => {

                setLocations(response.data)
            })
    }

    return (

        <BrowserRouter>
            <header className={"header"}>
                <NavigationBar/>
            </header>
            <div>
                <Routes>
                    <Route path={"/owners/register"} element={<SignUp addOwner={addOwner}/>}/>
                    <Route path={"/owners/login"} element={<LoginPage login={login}/>}/>
                    <Route path={"/locations/newlocation"} element={<AddLocation addLocation={addLocation}/> } />
                    <Route path={"/locations"} element={<LocationGallery locations={locations}/>}/>
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
