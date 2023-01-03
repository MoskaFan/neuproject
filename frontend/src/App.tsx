import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./SignUp";
import NavigationBar from "./NavigationBar";
import {Box, Typography} from "@mui/material";
import LoginPage from './LoginPage';
import { Layout } from "antd";


import AddLocation from './AddLocation';


import UserOwner from './hooks/UserOwner';
import { LocationData } from './entity/LocationData';
import LocationGallery from './LocationGallery';
import axios from 'axios';

const { Header, Content, Footer} = Layout;

function App() {

    const {login, addOwner, addLocation} = UserOwner()

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
            <Layout>
                <Header className={"header"}>

                    <NavigationBar/>
                </Header>
                <Content>
                    <div>
                        <Routes>
                            <Route path={"/owners/register"} element={<SignUp addOwner={addOwner}/>}/>
                            <Route path={"/owners/login"} element={<LoginPage login={login}/>}/>
                            <Route path={"/locations/newlocation"} element={<AddLocation addLocation={addLocation}/> } />
                            <Route path={"/locations"} element={<LocationGallery locations={locations}/>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer className={"footer"}>
                    <Box>
                        <Typography variant="body2" color="text.secondary" align="center">
                            {'Copyright © '}
                            <Typography component="h1" variant="h5">
                                Iuliia Atutova
                            </Typography>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Box>

                </Footer>
            </Layout>
      </BrowserRouter>

  );
}

export default App;
