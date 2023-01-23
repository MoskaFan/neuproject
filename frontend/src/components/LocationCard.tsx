import {Card} from "react-bootstrap";
import "../styles/LocationCard.css"
import {LocationData} from "../entity/locationData";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
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
        <Card className={"card"} >
            <Card.Img variant="top" src={props.location.image} className={"card-img-top"} alt = "..."/>
            <Card.Body>
                <Card.Title className={"card-title"}>{props.location.name}</Card.Title>
                    <Button size={"small"} variant="contained" color={"primary"}
                            startIcon={<InfoIcon/>} onClick={getLocationByIdOnClick} className={"Details"} >DETAILS</Button>
                    <Button size={"small"} variant="contained" color={"primary"}
                             startIcon={<EditIcon/>} onClick={getEditLocationById}>ÄNDERN</Button>
                    <Button size={"small"} variant="contained" color={"primary"}
                             startIcon={<DeleteIcon/>} onClick = {handleDeleteOnClick}>LÖSCHEN</Button>


            </Card.Body>
        </Card>
)
}