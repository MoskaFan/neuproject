import {NavLink} from "react-router-dom";
import '../styles/NavigationBar.css';

export default function NavigationBar() {

    return (
        <nav className={"nav-bar"}>
            <NavLink to={"/"} className={"site-title"}>Perfect Location</NavLink>
            <ul >
                <li >
                    <NavLink to={"/owners/register"}>Sign Up</NavLink>
                </li>
                <li >
                    <NavLink to={"/owners/login"}>Login</NavLink>
                </li>
                <li>
                    <NavLink to={"/locations/newlocation"}>Location anlegen</NavLink>
                </li>
            </ul>
        </nav>
    )
}