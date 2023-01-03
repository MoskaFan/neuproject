import axios from "axios";
import {useEffect, useState} from "react";
import {OwnerData} from "../entity/OwnerData";
import {LocationData} from "../entity/LocationData";


const API_URL = "/api/owners/";

export default function UserOwner() {
    const [userName, setUserName] = useState<string>("")


    useEffect(()=> {
        axios.get("/api/owners/login/me")
            .then(response => response.data)
            .then(data => {
                setUserName(data.userName);

            })

    }, [])


    function login(username: string, password: string): Promise<void>{

        return axios.post(API_URL + "login", undefined, {
            auth: {
                username,
                password
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
            axios.put("/api/owners/login/me", newLocation)

                .catch(console.error)
        }




    return {login, addOwner, addLocation}
}