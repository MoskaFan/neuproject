import axios from "axios"
import {useEffect, useState } from "react"
import { LocationData } from "../entity/locationData"
import { OwnerData } from "../entity/ownerData"
import LocationGallery from "./LocationGallery"
import SearchBar from "./SearchBar"

type LocationAppProps={
    user: OwnerData
}
export default function LocationApp(props: LocationAppProps){
    const [locations, setLocations] = useState<LocationData[]>([])
    const [searchCity, setSearchCity] = useState<string>("")

    useEffect(() => {
        getLocations()
    }, [searchCity])

    function getLocations() {
        axios.get('/api/locations/')
            .then((response) => {
                setLocations(response.data)
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


    const filteredSearch = locations.filter((location) =>
        location.address!.city.toLowerCase().includes(searchCity.toLowerCase()));

    function handleSearchText(searchCity: string){
        setSearchCity(searchCity)
    }

    function deleteLocation(locationId: string) {
        return axios.delete("/api/owners/locations/" + locationId)
            .then(response => response.data)
            .then(data => {
                setOwner(data)
            })
            .then(() => {
                setLocations([...locations].filter((location: LocationData) =>
                    location.id! !==locationId))
            })
    }

    function editLocation(ownerId: string, locationId: string, location: LocationData){
        return axios.put("/api/owners/locations/" + ownerId +"/"+locationId, location)

    }

    return (
        <div>
            <h1>{props.user.username}</h1>
            <img alt="location"
                 src="https://www.eventano.com/app/uploads/2021/08/freiheit15-trauung-1680x600.jpg"/>
            <SearchBar searchCityFunction={handleSearchText} />
            <LocationGallery deleteLocation={deleteLocation} editLocation={editLocation} locationList={filteredSearch}            />
        </div>
    )
}