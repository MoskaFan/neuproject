import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Footer.css"

export default function Footer() {

return(
<Container className={"footer"}>
    <span>Copyright: Iuliia Atutova</span><br/>
        {new Date().getFullYear()}
        {'.'}
</Container>
);
}