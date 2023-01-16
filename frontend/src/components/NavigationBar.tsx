import { Button } from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import "../styles/NavigationBar.css"


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
        <nav className={"nav-bar"}>
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
                    <Button onClick={logout}>Logout</Button>
                </li>
            </ul>
        </nav>
    )
}