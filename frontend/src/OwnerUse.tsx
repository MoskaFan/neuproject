import axios from "axios";
import { useState } from "react";
import {LoginData} from "./modell/LoginData";

const API_URL = "/api/owners/";

export default function OwnerUse() {
    const [userName, setUserName] = useState<string>()

    function login(username: string, password: string){

        return axios.post(API_URL + "login", undefined, {
            auth: {
                username,
                password
            }
        })
            .then(response => response.data)
            .then(data => {
                setUserName(data)
                return data
            })
    }
    function addOwner(newUser: LoginData){
        axios.post(API_URL + "register", newUser)

            .catch(console.error)
    }


    return {login, addOwner}
}