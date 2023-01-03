import {LocationData} from "./entity/LocationData";
import LocationCard from "./LocationCard";

type LocationGalleryProps = {
    locations: LocationData[];

}

export default function LocationGallery(props: LocationGalleryProps){

    const locationComponent = props.locations.map((location: LocationData) => {
        return <LocationCard location={location} key={location.id}/>
    })

    return(
        <div className={"card-gallery"}>
            {locationComponent}
        </div>
    )
}