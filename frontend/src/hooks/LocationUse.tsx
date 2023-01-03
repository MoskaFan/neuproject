
import axios from "axios";
import {LocationData} from "../entity/LocationData";


const API_URL = "/api/owners";

export default function LocationUse() {

    function addLocation(newLocation: LocationData){
        axios.put(API_URL, newLocation)

            .catch(console.error)
    }

    return {addLocation}
}