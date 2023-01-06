import React from "react";
import "../styles/Footer.css"

export default function Footer() {

return(
<section className={"footer"}>


    <span>Copyright: Iuliia Atutova</span><br/>
        {new Date().getFullYear()}
        {'.'}
</section>
);
}