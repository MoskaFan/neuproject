import axios from "axios"
import {useEffect, useState } from "react"
import { LocationData } from "../entity/locationData"

export default function useLocation(id: string | undefined) {

    const [getLocation, setGetLocation] = useState<LocationData>({
        name: "",
        image: "",
        description: "",
        website: "",
        pricePerPerson: 0,
        size: 0,
        eventType: "",
        maxCapacity: 0,
        address: {
            country: "",
            city: "",
            zipCode: "",
            street: "",
            houseNumber: "",
        },
        startDate: "",
        endDate: ""
    })
    useEffect(() => {
        if (id) {
            getLocationDetailsByID(id)
        }
    }, [id])

    function getLocationDetailsByID(locationId: string) {

        axios.get("/api/locations/" + locationId)
            .then(response => {
                console.log(response.data)
                setGetLocation(response.data)
            })
            .catch(console.error)
    }

    function editLocation(ownerId: string, locationId: string, location: LocationData){
        return axios.put("/api/owners/locations/" + ownerId +"/"+locationId, location)

    }

    return{getLocation, editLocation}
}