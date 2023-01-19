import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {ChangeEvent, useState} from "react";
import "../styles/Gallery.css"
import {Box, Container} from "@mui/material";
import SearchBar from "./SearchBar";
import {OwnerData} from "../entity/ownerData";



type LocationGalleryProps = {
    locations: LocationData[]
    owner: OwnerData
    deleteLocation(ownerId: string, locationId: string): void
    editLocation(ownerId: string, locationId: string, location: LocationData): void
}

export default function LocationGallery(props: LocationGalleryProps) {


    const [searchCity, setSearchCity] = useState<string>("");
    let [filteredLocations, setFilteredLocations] = useState(props.locations);



    function handleChangeCity (event: ChangeEvent<HTMLInputElement>)  {
        setSearchCity(event.target.value)
    }

    function handleSearch() {
        setSearchCity(searchCity)
    }

    const filter = (locations: LocationData[], query: string) => {
        if (!searchCity) {
            return locations
        }
        return locations.filter((location) => {
            const locationCity = location.address!.city.toLowerCase();
            return locationCity.includes(query.toLowerCase());
        })
    }
    const filterLocations = filter(filteredLocations, searchCity);



return(
    <Container>
        <Box>
            <img alt="location"
                 src="https://www.eventano.com/app/uploads/2021/08/freiheit15-trauung-1680x600.jpg"/>
            <SearchBar handleSearch={handleSearch} searchCityFunction={function (): void {
                throw new Error("Function not implemented.");
            }} ></SearchBar>

                <section className={"cards"}>
                    {filterLocations.map(location => (
                        <LocationCard location={location} key={location.id}
                                       editLocation={props.editLocation}
                                      owner={props.owner} removeLocation={props.deleteLocation}/>
                    ))}

            </section>
        </Box>
    </Container>
)
}
