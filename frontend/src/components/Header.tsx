import React from "react";
import NavigationBar from "./NavigationBar";
import "../App.css"
type HeaderProps ={
    username: string
    logout(): Promise<string>
}

export default function Header(props: HeaderProps) {

    return(
        <section className={"header"}>
            <NavigationBar  logout={props.logout}/>
            <h6>Hello {props.username}</h6>
        </section>
    );
}