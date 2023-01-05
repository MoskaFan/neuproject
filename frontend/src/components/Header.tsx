import React from "react";
import NavigationBar from "./NavigationBar";
import "../styles/Header.css"
export default function Header() {

    return(
        <div className={"header"}>
            <NavigationBar/>
        </div>
    );
}