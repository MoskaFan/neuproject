import React from "react";
import NavigationBar from "./NavigationBar";
import "../App.css"
import UseOwner from "../hooks/UseOwner";

export default function Header() {

    const {userName, logout} = UseOwner()

    return(
        <section className={"header"}>
            <NavigationBar logout={logout} />
            <h2>Hallo {userName}!</h2>
        </section>
    );
}