import {Card} from "react-bootstrap";
import "../styles/LocationCard.css"
import {LocationData} from "../entity/locationData";
import {useNavigate} from "react-router-dom";

type LocationCardProps = {
    location: LocationData
}

export default function LocationCard(props: LocationCardProps) {

    const navigate = useNavigate()

    function getLocationByIdOnClick() {
        navigate("/locations/" + props.location.id!)
    }

    return(
        <Card className={"card"}>
            <Card.Img variant="top" src={props.location.image} className={"card-img-top"} alt = "..."/>
            <Card.Body>
                <Card.Title className={"card-title"}>{props.location.name}</Card.Title>
                <Card.Text className={"card-text"}>{props.location.description}
                </Card.Text>
                <button onClick={getLocationByIdOnClick} className={"Details"} >Details</button>
            </Card.Body>
        </Card>
)
}