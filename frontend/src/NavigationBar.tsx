
import {NavLink} from "react-router-dom";
import './NavigationBar.css';



export default function NavigationBar() {



    return (
        <nav className={"nav-bar"}>
            <NavLink to={"/api/"} className={"site-title"}>Perfect Location</NavLink>
            <ul >
                <li >
                    <NavLink to={"/api/owners/signup"}>Sign Up</NavLink>
                </li>
                <li className={"app-body"}>

                </li>


            </ul>
        </nav>
    )
}