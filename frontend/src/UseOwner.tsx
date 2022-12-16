
import axios from "axios";
import { LoginData } from "./modell/LoginData";




export default function useOwner(){






    function addOwner(newOwner: LoginData){
        axios.post("/api/owners/signup/", newOwner)

            .catch(console.error)
    }


    return {addOwner}
}