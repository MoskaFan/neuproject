import { useNavigate } from "react-router-dom";
import { LocationData } from "../entity/locationData";
import { OwnerData } from "../entity/ownerData";
import LocationForm from "./LocationForm";

type AddLocationProps = {
    owner: OwnerData
    addLocation(ownerId: string, location: LocationData): void
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
        props.addLocation(props.owner.id!, location)
        navigate("/locations/")
    }

    return (
        <section className={"section"}>
            <LocationForm  submitLocation={submitLocation} location={emptyLocation}></LocationForm>
        </section>
    );
}
