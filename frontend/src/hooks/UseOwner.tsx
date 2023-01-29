import axios from "axios";
import {useEffect, useState} from "react";
import {LocationData} from "../entity/locationData";
import {LoginData} from "../entity/loginData";
import {OwnerData} from "../entity/ownerData";



const API_URL = "/api/owners/";

export default function UseOwner() {

    const emptyOwner: OwnerData = {
        "username": "anonymousUser",
        "email": "",
        "password": "",
        "locations": []
    }

    const [loggedInOwner, setLoggedInOwner] = useState<OwnerData>(emptyOwner)
    const [username, setUsername] = useState<string>("")

    useEffect(() => {
        if (loggedInOwner.username !== "anonymousUser") {
            (axios.get(API_URL + "login/me/"))
                .then(response => response.data)
                .then(owner => {
                    setLoggedInOwner(owner)
                })
                .catch(console.error)
        }

    }, [])


    function login(newOwner: OwnerData): Promise<OwnerData> {

        return axios.post(API_URL + "login/", undefined, {
            auth: {
                username: newOwner.username,
                password: newOwner.password
            }
        })
            .then(response => response.data)
            .then(data => {
                setLoggedInOwner(data)
                return data
            })
            .catch(console.error)
    }
    console.log(loggedInOwner)

    function addOwner(newUser: OwnerData) {
        axios.post(API_URL, newUser)
            .catch(console.error)
    }

    function addLocation(newLocation: LocationData){
        axios.put(API_URL + "locations/location/", newLocation)
            .then(response => response.data)
            .then(owner => {
                setLoggedInOwner(owner)
                return owner
            })
            .catch(console.error)
    }

    function logout(): Promise<string>{
        return axios.post("/api/owners/logout")
            .then((response) => response.data)
            .then(owner => {
                setLoggedInOwner(owner)
                return owner
            })
            .catch(console.error)
    }



    return {loggedInOwner, login, addOwner, logout, addLocation}
}