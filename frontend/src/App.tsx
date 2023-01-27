import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import LoginPage from './components/LoginPage';
import UseOwner from "./hooks/UseOwner";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LocationDetails from "./components/LocationDetails";
import EditForm from './components/EditForm';
import NavigationBar from "./components/NavigationBar";
import { Typography } from '@mui/material';
import AddLocation from './components/AddLocation';
import LocationApp from "./components/LocationApp";


function App() {

    const {owner, username, addLocation, login, addOwner, logout} = UseOwner()



    return (
        <BrowserRouter>
            <section className={"app"}>
            <NavigationBar logout={logout}/>
            <section className={"content"}>
            <Typography>Hello {username}</Typography>

                <Routes>
                    <Route path={"/owners/register"} element={<SignUp addOwner={addOwner}/>}/>
                    <Route path={"/owners/login"} element={<LoginPage login={login}/>}/>
                    <Route path={"/locations"} element={<LocationApp />}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/locations/:id/edit"} element={ <EditForm owner={owner}/> }></Route>
                    <Route path={"/locations/:id"} element={<LocationDetails/>}></Route>

                    <Route path={"/locations/add"} element={<AddLocation owner={owner}
                                                                     addLocation={addLocation}/>} ></Route>
                </Routes>
            </section>
            <Footer></Footer>
            </section>
        </BrowserRouter>

    );
}

export default App;
