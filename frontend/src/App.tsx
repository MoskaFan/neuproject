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
import Header from "./components/Header";
import Home from "./components/Home";
import LocationDetails from "./components/LocationDetails";
import {OwnerData} from "./entity/ownerData";
import EditForm from './components/EditForm';


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





    function deleteLocation(locationId: string) {
        return axios.delete("/api/owners/locations/" + locationId)
            .then(response => response.data)
            .then(data => {
                setOwner(data)
            })
            .then(() => {
                setLocations([...locations].filter((location: LocationData) =>
                        location.id! !==locationId))
            })


    }

    function editLocation(ownerId: string, locationId: string, location: LocationData){
        return axios.put("/api/owners/locations/" + ownerId +"/"+locationId, location)

    }


    return (
        <BrowserRouter>
            <Header logout={logout} username={username}></Header>
            <section className={"content"}>
                <Routes>
                    <Route path={"/owners/register"} element={<SignUp addOwner={addOwner}/>}/>
                    <Route path={"/owners/login"} element={<LoginPage login={login}/>}/>
                    <Route path={"/owners/edit"} element={<EditForm
                        owner={owner} editLocation={editLocation}  addLocation={addLocation}/>}/>
                    <Route path={"/locations"} element={<LocationGallery locations={locations}
                                                                         deleteLocation={deleteLocation}
                                                                         editLocation={editLocation} />}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/locations/:id"} element={<LocationDetails/>}></Route>
                    <Route path={"/locations/edit/:locationId"} element={<EditForm
                        owner={owner} editLocation={editLocation}  addLocation={addLocation}/>}></Route>
                </Routes>
            </section>

            <Footer></Footer>
        </BrowserRouter>

    );
}

export default App;
