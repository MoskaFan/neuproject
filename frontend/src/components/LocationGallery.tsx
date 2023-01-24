import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {useState} from "react";
import "../styles/Gallery.css"
import {Box, Container, Typography} from "@mui/material";
import SearchBar from "./SearchBar";


type LocationGalleryProps = {
    locationList: LocationData[]
    deleteLocation(locationId: string): void
    editLocation(ownerId: string, locationId: string, location: LocationData): void
}

export default function LocationGallery(props: LocationGalleryProps) {


    return (
        <Container>
            <Box className={"form"}>
                <section className={"cards"}>
                    <div className={"cards"}>
                        {props.locationList.map(location => (
                            <LocationCard location={location} key={location.id}
                                          editLocation={props.editLocation}
                                          removeLocation={props.deleteLocation}
                            />
                        ))}
                    </div>
                </section>
            </Box>
        </Container>
    )
}
