import {Card} from "react-bootstrap";
import "../styles/LocationCard.css"
import {LocationData} from "../entity/locationData";
import {useNavigate} from "react-router-dom";
import {ButtonGroup} from "@mui/material";
import {OwnerData} from "../entity/ownerData";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

type LocationCardProps = {
    location: LocationData
    owner: OwnerData
    removeLocation(ownerId: string, locationId: string): void
    editLocation(ownerId: string, locationId: string, location: LocationData): void
}


export default function LocationCard(props: LocationCardProps) {

    const navigate = useNavigate()

    function getLocationByIdOnClick() {
        navigate("/locations/" + props.location.id)
    }
    function handleDeleteOnClick() {
        props.removeLocation(props.owner.id!, props.location.id!)

    }
    function handleEditOnClick() {
        props.editLocation(props.owner.id!, props.location.id!, props.location)
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
                    <EditIcon onClick = {handleEditOnClick}></EditIcon>
                    <DeleteIcon onClick = {handleDeleteOnClick}>LÖSCHEN</DeleteIcon>
                </ButtonGroup>

            </Card.Body>
        </Card>
)
}