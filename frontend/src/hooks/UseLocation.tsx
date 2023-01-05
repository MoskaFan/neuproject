import axios from "axios";
import {LocationData} from "../entity/locationData";

const API_URL = "/api/owners";

export default function UseLocation() {

    function addLocation(newLocation: LocationData){
        axios.put(API_URL, newLocation)
            .catch(console.error)
    }

    return {addLocation}
}