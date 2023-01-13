import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {ChangeEvent, useState} from "react";
import "../styles/Gallery.css"


type LocationGalleryProps = {
    locations: LocationData[]
}

export default function LocationGallery(props: LocationGalleryProps) {


    const [searchCity, setSearchCity] = useState<string>("")
    const [maxPrice, setMaxPrice] = useState<string>("")
    const [searchCapacity, setCapacity] = useState<string>("")
    const [searchEventType, setSearchEventType] = useState<string>("")


    const filterByCity = props.locations.filter((location) => {
        return searchCity !== ""&& location.address!.city.includes(searchCity)
    })

    const filterByPrice = props.locations.filter((location) => {
        return maxPrice !== "" && location.pricePerPerson! < parseInt(maxPrice)
    })
    const filterByCapacity = props.locations.filter((location) => {
        return searchCapacity !== "" && location.maxCapacity! <= parseInt(searchCapacity)
    })

    const filterByEventType = props.locations.filter((location) => {
        return searchEventType !== "" && location.eventType!
            .toLowerCase().includes(searchEventType.toLowerCase())
    })


    const locationCardsCity =
        filterByCity.map((location: LocationData) => {
            return <LocationCard location={location} key={location.id}/>
        })

    const locationCardsPrice =
        filterByPrice.map((location: LocationData) => {
            return <LocationCard location={location} key={location.id}/>
        })
    const locationCardsCapacity =
        filterByCapacity.map((location: LocationData) => {
            return <LocationCard location={location} key={location.id}/>
        })
    const locationCardsEventType =
        filterByEventType.map((location: LocationData) => {
            return <LocationCard location={location} key={location.id}/>
        })

    return (
        <section>
            <section className={"search-element"}>
                <form className = "search-bar">
                    <fieldset>
                        <h3>Stadt:</h3>
                        <label htmlFor="City">Stadt: </label><br/>
                        <input name="City" onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setSearchCity(event.target.value)}/>
                    </fieldset>
                    <fieldset className={"price-input"}>
                        <h3>Preis</h3>
                        <div>
                            <label htmlFor="Max">Max Preis: </label><br/>
                            <input type="number" className="maxPrice" name="maxPrice"
                                   onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                       setMaxPrice(event.target.value)}/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Anlass:</h3>
                        <div>
                            <label htmlFor="anlass">Anlass: </label><br/>
                            <input type="text" className="eventType" name="eventType"
                                   onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                       setSearchEventType(event.target.value)}/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <h3>Personenanzahl:</h3>
                        <div>
                            <label htmlFor="zehn">Max Personenanzahl: </label><br/>
                            <input type="number" className="maxCapacity" name="maxCapacity"
                                   onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                       setCapacity(event.target.value)}/>
                        </div>
                    </fieldset>

                </form>
            </section>
            <section className={"cards"}>
                {locationCardsCity}
                {locationCardsCapacity}
                {locationCardsPrice}
                {locationCardsEventType}

            </section>
        </section>

    )
}