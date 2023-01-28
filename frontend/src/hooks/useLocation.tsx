import axios from "axios"
import {useEffect, useState } from "react"
import { LocationData } from "../entity/locationData"
import { OwnerData } from "../entity/ownerData"

export default function useLocation(id: string | undefined) {

    const [getLocation, setGetLocation] = useState<LocationData>()
    const [locations, setLocations] = useState<LocationData[]>([])

    useEffect(() => {
        getLocations()
    }, [])

    function getLocations() {
        axios.get('/api/locations/')
            .then((response) => {
                setLocations(response.data)
            })
    }
    useEffect(() => {
        if (id) {
            getLocationDetailsByID(id)
        }
    }, [id])

    const [username, setUsername] = useState<string>("")

    useEffect(() => {
        axios.get("/api/owners/login/me/")
            .then(response => response.data)
            .then(data => {
                setUsername(data)
            })
    }, [])

    function getLocationDetailsByID(locationId: string) {

        axios.get("/api/locations/" + locationId)
            .then((response) => response.data)
            .then((data) => {
                setGetLocation(data)
                return data
            })
            .catch(console.error)
    }

    function editLocation(locationId: string, location: LocationData){
        return axios.put("/api/owners/locations/location/" + locationId, location)
            .then((response) => response.data)
            .then((data) => {
                setUsername(data)
                return data
            })
            .then((location) => {
                setGetLocation(location)
                return location
            });
    }

    return{getLocation, editLocation}
}