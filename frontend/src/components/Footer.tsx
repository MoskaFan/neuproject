import {Box, Typography} from "@mui/material";
import React from "react";
import "../styles/Footer.css"

export default function Footer() {

return(
<div>

        <Typography>
            Copyright: Iuliia Atutova
        </Typography>{' '}
        {new Date().getFullYear()}
        {'.'}
</div>
);
}