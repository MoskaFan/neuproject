import axios from "axios";
import {useEffect, useState} from "react";
import {LocationData} from "../entity/locationData";
import {LoginData} from "../entity/loginData";
import {OwnerData} from "../entity/ownerData";


const API_URL = "/api/owners/";

export default function UseOwner() {

    const [userName, setUserName] = useState<string>("")

    useEffect(() => {
        axios.get("/api/owners/login/me")
            .then(response => response.data)
            .then(setUserName)
    }, [])

    function login(newOwner: LoginData): Promise<void> {

        return axios.post(API_URL + "login", undefined, {
            auth: {
                username: newOwner.username,
                password: newOwner.password
            }
        })
            .then(response => response.data)
            .then(data => {
                setUserName(data)
                return data
            })
    }

    function addOwner(newUser: OwnerData) {
        axios.post(API_URL, newUser)
            .catch(console.error)
    }

    function addLocation(ownerId: string, newLocation: LocationData) {
        axios.put("http://localhost:3000/api/owners/" + ownerId, newLocation)
            .catch(console.error)
    }

    function logout() {
        return axios.post("/api/owners/logout")
            .then((response) => response.data)
            .then((data) => {
                setUserName(data)
                return data
            })
    }

    function getOwnerById(ownerId: string) {
        return axios.get("/api/owners/" + ownerId)
            .then((response) => response.data)
            .then((data) => {
                setUserName(data)
                return data
            })
    }


    return {userName, login, addOwner, addLocation, logout}
}