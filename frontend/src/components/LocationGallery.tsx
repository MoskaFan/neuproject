import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import "../styles/Gallery.css"
import {Box, Container} from "@mui/material";


type LocationGalleryProps = {
    locationList: LocationData[]
    deleteLocation(locationId: string): void
    editLocation(locationId: string, location: LocationData): void
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
