import {Card} from "react-bootstrap";
import "../styles/LocationCard.css"
import {LocationData} from "../entity/locationData";

type LocationCardProps = {
    location: LocationData
}

export default function LocationCard(props: LocationCardProps) {
return(
        <Card className={"card"}>
            <Card.Img variant="top" src={props.location.image} className={"card-img-top"} alt = "..."/>
            <Card.Body>
                <Card.Title className={"card-title"}>{props.location.name}</Card.Title>
                <Card.Text className={"card-text"}>{props.location.description}
                </Card.Text>
            </Card.Body>
        </Card>
)
}