
import axios from "axios";
import {LocationData} from "./modell/LocationData";


const API_URL = "/api/locations/";

export default function LocationUse() {



    function addLocation(newLocation: LocationData){
        axios.post(API_URL + "newlocation", newLocation)

            .catch(console.error)
    }


    return {addLocation}
}