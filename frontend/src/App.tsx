import React, {useEffect, useState} from 'react';
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import LoginPage from './components/LoginPage';
import AddLocation from './components/AddLocation';
import LocationGallery from './components/LocationGallery';
import axios from 'axios';
import {LocationData} from './entity/locationData';
import UseOwner from "./hooks/UseOwner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LocationDetails from "./components/LocationDetails";


function App() {

    const {username, addLocation, login, addOwner, logout} = UseOwner()
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
    const [ownerId, setOwnerId] = useState<string>("")
    useEffect(() => {
        axios.get("/api/owners/login/")
            .then(response => response.data)
            .then(data => {
                setOwnerId(data)
            })
    }, [])
    return (
        <BrowserRouter>
            <Header logout={logout} username={username}></Header>
            <section className={"content"}>
                <Routes>
                    <Route path={"/owners/register"} element={<SignUp addOwner={addOwner}/>}/>
                    <Route path={"/owners/login"} element={<LoginPage login={login}/>}/>
                    <Route path={"/owners/login/me/:ownerId"} element={<AddLocation addLocation={addLocation}
                                                                            ownerId={ownerId}/>}/>
                    <Route path={"/locations"} element={<LocationGallery locations={locations}/>}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/locations/:id"} element={<LocationDetails/>}></Route>
                </Routes>
            </section>

            <Footer></Footer>
        </BrowserRouter>

    );
}

export default App;
