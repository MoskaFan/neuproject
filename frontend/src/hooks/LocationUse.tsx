
import axios from "axios";
import {LocationData} from "../entity/LocationData";


const API_URL = "/api/locations/";

export default function LocationUse() {

    function addLocation(newLocation: LocationData){
        axios.post(API_URL, newLocation)

            .catch(console.error)
    }

    return {addLocation}
}