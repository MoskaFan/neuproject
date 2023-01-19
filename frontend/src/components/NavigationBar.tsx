
import {NavLink, useNavigate} from "react-router-dom";
import "../styles/NavigationBar.css"
import {AppBar, Toolbar} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';

type NavigationBarProps ={
    logout: () => Promise<string>
}


export default function NavigationBar(props: NavigationBarProps) {
    const navigation = useNavigate()

    function logout(){
        props.logout().then(() =>
            navigation("/locations"))
    }


    return (
        <AppBar position="relative" className={"nav-bar"}>
            <Toolbar color={"info"}>
                <MenuIcon className={"nav-bar-icon"}/>
            <NavLink to={"/"} className={"site-title"}>Perfect Location</NavLink>
            <ul >
                <li >
                    <NavLink to={"/owners/register"}>Registrieren</NavLink>
                </li>
                <li >
                    <NavLink to={"/owners/login"}>Einloggen</NavLink>
                </li>
                <li>
                    <NavLink to={"/owners/login/me/:ownerId"}>Als Gastgeber:in loslegen</NavLink>
                </li>
                <li>
                    <NavLink to={"/locations"}>Locations finden</NavLink>
                </li>
                <li>
                    <ExitToAppIcon onClick={logout}>Ausloggen</ExitToAppIcon>
                </li>
            </ul>
            </Toolbar>
        </AppBar>
    )
}