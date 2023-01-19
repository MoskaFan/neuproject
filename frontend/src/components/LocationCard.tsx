import {Card} from "react-bootstrap";
import "../styles/LocationCard.css"
import {LocationData} from "../entity/locationData";
import {useNavigate} from "react-router-dom";
import {Button, ButtonGroup} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';

import InfoIcon from '@mui/icons-material/Info';

type LocationCardProps = {
    location: LocationData
    removeLocation(locationId: string): void
    editLocation(ownerId: string, locationId: string, location: LocationData): void
}


export default function LocationCard(props: LocationCardProps) {

    const navigate = useNavigate()

    function getLocationByIdOnClick() {
        navigate("/locations/" + props.location.id)
    }
    function handleDeleteOnClick() {
        props.removeLocation(props.location.id!)

    }
    function getEditLocationById() {
        navigate("/locations/edit/" + props.location.id)
    }


    return(
        <Card className={"card"}>
            <Card.Img variant="top" src={props.location.image} className={"card-img-top"} alt = "..."/>
            <Card.Body>
                <Card.Title className={"card-title"}>{props.location.name}</Card.Title>
                <Card.Text className={"card-text"}>{props.location.description}
                </Card.Text>
                <ButtonGroup sx={{margin:3, borderRadius: 3}} variant="contained" color={"primary"} >
                    <InfoIcon onClick={getLocationByIdOnClick} className={"Details"} >DETAILS</InfoIcon>
                    <EditIcon onClick={getEditLocationById}></EditIcon>
                    <Button onClick = {handleDeleteOnClick}>LÖSCHEN</Button>
                </ButtonGroup>

            </Card.Body>
        </Card>
)
}