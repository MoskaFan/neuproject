import {OwnerData} from "../entity/ownerData";
import {LocationData} from "../entity/locationData";
import {useNavigate, useParams} from "react-router-dom";
import "../styles/SiLoLoc.css"
import LocationForm from "./LocationForm";
import useLocation from "../hooks/useLocation";



export default function EditForm() {
    const navigate = useNavigate();

    const {id} = useParams()

    const{getLocation, editLocation} = useLocation(id)

    if(!getLocation) {
        return (<p>Die Location ist loading</p>)
    }

    console.log("EditForm: ", getLocation)

    function submitLocation(location: LocationData){
        editLocation(location.id!, location)
        navigate("/" )
    }

    return (
        <section className={"section"}>
        <LocationForm submitLocation={submitLocation} location={getLocation}></LocationForm>
        </section>
    );
}
