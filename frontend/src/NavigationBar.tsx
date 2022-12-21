
import {NavLink} from "react-router-dom";
import './NavigationBar.css';



export default function NavigationBar() {



    return (
        <nav className={"nav-bar"}>
            <NavLink to={"/"} className={"site-title"}>Perfect Location</NavLink>
            <ul >
                <li >
                    <NavLink to={"/api/owners/register/"}>Sign Up</NavLink>
                </li>
                <li >
                    <NavLink to={"api/owners/login"}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={"/api/locations/newlocation"}>Location anlegen</NavLink>
                </li>


            </ul>
        </nav>
    )
}