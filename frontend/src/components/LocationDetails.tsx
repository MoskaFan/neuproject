import axios from "axios";
import {useEffect, useState} from "react";
import {LocationData} from "../entity/locationData";
import {useNavigate, useParams} from "react-router-dom";
import {
    Box,
    Button,
    ButtonGroup,
    Container,

} from "@mui/material";



export default function LocationDetails() {


    const params = useParams()

    const id: string | undefined = params.id
    const [location, setLocation] = useState<LocationData>()
    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            getLocationDetailsByID(id)
        }
    }, [id])

    function getLocationDetailsByID(id: string) {

        axios.get("/api/locations/" + id)
            .then(response => {
                console.log(response.data)
                setLocation(response.data)
            })
            .catch(console.error)
    }


    return (
        <Container className={"form"}>{location ?
            <Box display="flex" flexDirection={"column"}
                 alignItems={"center"} justifyContent={"center"}
                 borderRadius={5} padding={3}
                 className={"table"}>
                <h1>{location.name}</h1>
                <img alt={""} src={location.image}/>
                {location.description}
                <a href={location.website}>{location.website}</a>
                <br/><br/>
                <p><b>Preis pro Person: </b>{location.pricePerPerson}</p>
                <p><b>Max Capacity: </b>{location.maxCapacity}</p>
                <p><b>Fläche: </b>{location.size}</p>
                <p><b>Anlass: </b>{location.eventType}</p>


                <br/><br/><ButtonGroup variant="contained" color={"primary"}>
                <Button onClick={() => navigate("/locations")}>Go back</Button>
            </ButtonGroup>
            </Box>
            : <p>Loading...</p>
        }

        </Container>
    )
}