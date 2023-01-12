import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {useEffect, useState} from "react";
import SearchBar from "./SearchBar";


type LocationGalleryProps = {
    locations: LocationData[]

}

export default function LocationGallery(props: LocationGalleryProps) {


    const [searchCity, setSearchCity] = useState<string>("")
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(10000)
    const [searchSize, setSize] = useState<number>(0)
    const [searchCapacity, setCapacity] = useState<number>(0)
    const [searchEventType, setSearchEventType] = useState<string>("")
    const [searchResults, setSearchResults] = useState<LocationData[]>([])



    useEffect(() => {
        const results = props.locations
            .filter((location) =>
                location.address!.city.toLowerCase().includes(searchCity.toLowerCase()))
            .filter((location) => location.pricePerPerson! > minPrice
                && location.pricePerPerson! < maxPrice)
            .filter((location) => location.size! <= searchSize)
            .filter((location) => location.maxCapacity! <= searchCapacity)
            .filter((location) => location.eventType!
                .toLowerCase().includes(searchEventType.toLowerCase()))
        setSearchResults(results);
    }, [])

    const locationComponent =
        searchResults.map((location: LocationData) => {
            return <LocationCard location={location} key={location.id}/>
        })


    function handleCityChange(searchCity: string) {
        setSearchCity(searchCity)
    }

    function handleEventType(searchEventType: string) {
        setSearchEventType(searchEventType)
    }

    function handleMaxPriceValue(maxPrice: number) {
        setMaxPrice(maxPrice)
    }

    function handleMinPriceValue(minPrice: number){
        setMinPrice(minPrice)
    }

    function handleCapacity(searchCapacity: number) {
        setCapacity(searchCapacity)
    }

    function handleSize(searchSize: number) {
        setSize(searchSize)
    }
    function handleSubmit(searchResults: LocationData[]){
        setSearchResults(searchResults)
    }

    function mapLocations() {
        return searchResults.length > 0 ? locationComponent : <p>Keine Angaben</p>
    }

    return (
        <section>
            <section>
                <SearchBar searchCity={handleCityChange}
                           searchCapacity={handleCapacity}
                           searchMinPrice={handleMinPriceValue}
                           searchMaxPrice={handleMaxPriceValue}
                           searchSize={handleSize}
                           searchEventType={handleEventType}
                           handleSubmit={handleSubmit}/>
            </section>
            <section>
                {mapLocations()}
            </section>
        </section>

)
}