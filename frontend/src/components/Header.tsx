import React from "react";
import NavigationBar from "./NavigationBar";
import "../App.css"
import {Container} from "@mui/material";
type HeaderProps ={
    username: string
    logout(): Promise<string>
}

export default function Header(props: HeaderProps) {

    return(
        <Container className={"header"}>
            <NavigationBar  logout={props.logout}/>
            <h6>Hello {props.username}</h6>
        </Container>
    );
}