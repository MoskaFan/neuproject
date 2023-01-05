import axios from "axios";
import {useEffect, useState} from "react";
import {LocationData} from "../entity/locationData";
import { LoginData } from "../entity/loginData";
import {OwnerData} from "../entity/ownerData";


const API_URL = "/api/owners/";

export default function UseOwner() {
    const [userName, setUserName] = useState<string>("")

    useEffect(()=> {
        axios.get("/api/owners/login/me")
            .then(response => response.data)
            .then(data => {
                setUserName(data.userName);
            })
    }, [])

    function login(newOwner: LoginData): Promise<void>{

        return axios.post(API_URL + "login", undefined, {
            auth: {
                username:newOwner.username,
                password:newOwner.password
            }
        })
            .then(response => response.data)
            .then(data => {
                setUserName(data.userName)
            })
    }

    function addOwner(newUser: OwnerData){
        axios.post(API_URL, newUser)
            .catch(console.error)
    }

    function addLocation(newLocation: LocationData){
        axios.put("api/owners/login/me", newLocation)
            .catch(console.error)
    }


    return {login, addOwner, addLocation}
}