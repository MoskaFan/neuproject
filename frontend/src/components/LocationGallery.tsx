import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {useState} from "react";
import "../styles/Gallery.css"
import {Box, Container} from "@mui/material";
import SearchBar from "./SearchBar";




type LocationGalleryProps = {
    locations: LocationData[]
    deleteLocation(locationId: string): void
    editLocation(ownerId: string, locationId: string, location: LocationData): void
}

export default function LocationGallery(props: LocationGalleryProps) {


    const [searchCity, setSearchCity] = useState<string>("");
    let [filteredLocations, setFilteredLocations] = useState(props.locations);



    function handleChangeCity (searchCity: string)  {
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
            <SearchBar searchCityFunction={handleChangeCity}></SearchBar>
                <section className={"cards"}>
                    {props.locations.map(location => (
                        <LocationCard location={location} key={location.id}
                                       editLocation={props.editLocation}
                                      removeLocation={props.deleteLocation} />
                    ))}

            </section>
        </Box>
    </Container>
)
}
