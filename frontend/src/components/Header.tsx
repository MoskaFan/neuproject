import React from "react";
import NavigationBar from "./NavigationBar";
import "../App.css"

export default function Header() {

    return(
        <section className={"header"}>
            <NavigationBar/>
        </section>
    );
}