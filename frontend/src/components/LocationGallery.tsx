import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {useState} from "react";
import "../styles/Gallery.css"
import {Box, Container, Typography} from "@mui/material";
import SearchBar from "./SearchBar";


type LocationGalleryProps = {
    locations: LocationData[]
    deleteLocation(locationId: string): void
    editLocation(ownerId: string, locationId: string, location: LocationData): void
}

export default function LocationGallery(props: LocationGalleryProps) {

// @ts-ignore
    const [searchCity, setSearchCity] = useState<string>("");
    const [filteredLocations, setFilteredLocations] = useState(props.locations);

    const searchAllCities = props.locations.map((location) => {
        return (
            <label>{location.address!.city}</label>)

    })

    function handleChangeCity(searchCity: string) {
        setSearchCity(searchCity)
        const filter: LocationData[] = props.locations.filter((location) =>
            location.address!.city.toLowerCase() === searchCity.toLowerCase());
        setFilteredLocations(filter);
    }


    return (
        <Container>
            <Box className={"form"}>
                <img alt="location"
                     src="https://www.eventano.com/app/uploads/2021/08/freiheit15-trauung-1680x600.jpg"/>
                <Typography>{searchAllCities}</Typography>
                <SearchBar searchCityFunction={handleChangeCity}></SearchBar>
                <section className={"cards"}>

                    <div className={"cards"}>
                        {filteredLocations.map(location => (
                            <LocationCard location={location} key={location.id}
                                          editLocation={props.editLocation}
                                          removeLocation={props.deleteLocation}/>
                        ))}
                    </div>

                </section>
            </Box>
        </Container>
    )
}
