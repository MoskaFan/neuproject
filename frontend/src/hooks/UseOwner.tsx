import axios from "axios";
import {useEffect, useState} from "react";
import {LocationData} from "../entity/locationData";
import {LoginData} from "../entity/loginData";
import {OwnerData} from "../entity/ownerData";



const API_URL = "/api/owners/";

export default function UseOwner() {


    const [username, setUsername] = useState<string>("")

    useEffect(() => {
        axios.get("/api/owners/login/me/")
            .then(response => response.data)
            .then(data => {
                setUsername(data)
            })
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
                setUsername(data)
                return data
            })
    }

    function addOwner(newUser: OwnerData) {
        axios.post(API_URL, newUser)
            .catch(console.error)
    }

    function addLocation(ownerId: string, newLocation: LocationData){
        axios.put(API_URL + "locations/owner/" + ownerId, newLocation)
            .catch(console.error)
    }

    function logout(): Promise<string>{
        return axios.post("/api/owners/logout")
            .then((response) => response.data)
            .then((data) => {
                setUsername(data)
                return data
            })
    }
    const [owner, setOwner] = useState<OwnerData>({
        id: "",
        username: "",
        email: "",
        password: "",
        locations: []
    })

    useEffect(() => {
        axios.get("/api/owners/login/owner")
            .then(response => response.data)
            .then(data => {
                setOwner(data)
            })
    }, [])

    return { owner, username, login, addOwner, logout, addLocation}
}