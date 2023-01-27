import {OwnerData} from "../entity/ownerData";
import {LocationData} from "../entity/locationData";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "../styles/SiLoLoc.css"
import LocationForm from "./LocationForm";
import useLocation from "../hooks/useLocation";


type EditFormProps = {
    owner: OwnerData
}

export default function EditForm(props: EditFormProps) {
    const navigate = useNavigate();

    const {id} = useParams()

    const{getLocation, editLocation} = useLocation(id)

    if(!getLocation) {
        return (<p>Die Location ist loading</p>)
    }

    console.log("EditForm: ", getLocation)

    function submitLocation(location: LocationData){
        editLocation(props.owner.id!, id!, location)
        navigate("/locations/" + id)
    }

    return (
        <section className={"section"}>
        <LocationForm submitLocation={submitLocation} location={getLocation}></LocationForm>
        </section>
    );
}
