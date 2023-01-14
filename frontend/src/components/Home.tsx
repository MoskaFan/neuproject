import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../styles/Home.css"

export default function Home() {

    const navigate = useNavigate();

    return(
        <section className={"home-page"}>
            <Typography variant={"h6"}>

            Perfekte Locations finden

        </Typography>
            <br/>
            <img alt = "start" src = "https://www.eventano.com/app/uploads/2022/02/loft14-bar-berlin-philosophie-slider-1680x600.jpg" />
            <br/>
            <br/>
            <Button onClick={() => navigate("/locations")} className={"btn"}>Perfekte Location finden</Button>
        </section>


    )
}