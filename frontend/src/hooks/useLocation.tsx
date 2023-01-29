import axios from "axios"
import {useEffect, useState } from "react"
import { LocationData } from "../entity/locationData"



export default function useLocation(id: string | undefined) {

    const [getLocation, setGetLocation] = useState<LocationData>()


    useEffect(() => {
        if (id) {
            getLocationDetailsByID(id)
        }
    }, [id])

    function getLocationDetailsByID(locationId: string) {

        axios.get("/api/locations/" + locationId)
            .then((response) => response.data)
            .then((data) => {
                setGetLocation(data)
                return data
            })
            .catch(console.error)
    }

    function editLocation(locationId: string, location: LocationData): Promise<LocationData>{
        return axios.put("/api/owners/locations/location/" + locationId, location)
            .then((response) => response.data)
            .then((data) => {
                setGetLocation(data)
                return data
            })
            .catch(console.error)
    }

    return{getLocation, editLocation}
}