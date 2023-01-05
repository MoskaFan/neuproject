import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import LoginPage from './LoginPage';
import AddLocation from './AddLocation';
import LocationGallery from './LocationGallery';
import axios from 'axios';
import { LocationData } from '../entity/locationData';
import UseOwner from "../hooks/UseOwner";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

function App() {

    const {login, addOwner, addLocation} = UseOwner()
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
                <Header></Header>
                        <Routes>
                            <Route path={"/owners/register"} element={<SignUp addOwner={addOwner}/>}/>
                            <Route path={"/owners/login"} element={<LoginPage login={login}/>}/>
                            <Route path={"/locations/newlocation"} element={<AddLocation addLocation={addLocation}/> } />
                            <Route path={"/locations"} element={<LocationGallery locations={locations}/>}/>
                            <Route path={"/"} element={<Home/>}/>
                        </Routes>
                <Footer></Footer>
      </BrowserRouter>

  );
}

export default App;
