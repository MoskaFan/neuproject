import { useNavigate } from "react-router-dom";
import { LocationData } from "../entity/locationData";
import LocationForm from "./LocationForm";
import "../styles/SiLoLoc.css"

type AddLocationProps = {
    addLocation(location: LocationData): void
}


export default function AddLocation(props: AddLocationProps) {
    const navigate = useNavigate();

    const emptyLocation: LocationData = {

        name: "",
        image: "",
        description: "",
        website: "",
        pricePerPerson: 0,
        size: 0,
        eventType: "",
        maxCapacity: 0,
        address: {
            country: "",
            city: "",
            zipCode: "",
            street: "",
            houseNumber: "",
        },
        startDate: "",
        endDate: ""
    }

    function submitLocation(location: LocationData){
        props.addLocation(location)
        navigate("/")
    }

    return (
        <section className={"section"}>
            <LocationForm  submitLocation={submitLocation} location={emptyLocation}></LocationForm>
        </section>
    );
}
