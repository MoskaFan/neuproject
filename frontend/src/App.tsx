import React, {useEffect, useState} from 'react';
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import LoginPage from './components/LoginPage';
import LocationGallery from './components/LocationGallery';
import axios from 'axios';
import {LocationData} from './entity/locationData';
import UseOwner from "./hooks/UseOwner";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LocationDetails from "./components/LocationDetails";
import {OwnerData} from "./entity/ownerData";
import EditForm from './components/EditForm';
import NavigationBar from "./components/NavigationBar";
import { Typography } from '@mui/material';
import LocationApp from './components/LocationApp';


function App() {

    const {username, addLocation, login, addOwner, logout} = UseOwner()

    const [owner, setOwner] = useState<OwnerData>({
        id: "",
        username: "",
        email: "",
        password: "",
        locations: []
    })

    useEffect(() => {
        axios.get("/api/owners/login/owner")
            .then(response => response.data)
            .then(data => {
                setOwner(data)
            })
    }, [])
    

    return (
        <BrowserRouter>
            <section className={"app"}>
            <NavigationBar  logout={logout}/>
            <section className={"content"}>
            <Typography>Hello {username}</Typography>

                <Routes>
                    <Route path={"/owners/register"} element={<SignUp addOwner={addOwner}/>}/>
                    <Route path={"/owners/login"} element={<LoginPage login={login}/>}/>
                    <Route path={"/locations"} element={<LocationApp user={owner} />}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/locations/:id"} element={<LocationDetails/>}></Route>

                </Routes>
            </section>
            <Footer></Footer>
            </section>
        </BrowserRouter>

    );
}

export default App;
