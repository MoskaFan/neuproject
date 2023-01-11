import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {ChangeEvent, useState} from "react";
import {Button} from "@mui/material";


type LocationGalleryProps = {
    locations: LocationData[];
}

export default function LocationGallery(props: LocationGalleryProps){

    const [searchCity, setSearchCity] = useState("")
    const [minPrice, setMinPrice] = useState<number>(0)
    const [maxPrice, setMaxPrice] = useState<number>(10000)
    const [searchSize, setSearchSize] = useState("")
    const [searchCapacity, setSearchCapacity] = useState("")
    const [searchEventType, setSearchEventType] = useState("")
    const [filteredLocations, setFilteredLocations] = useState<LocationData[]>(props.locations)

    function filterListByCity(){
        const filteredListByCity = filteredLocations.filter((location) =>
            location.address.city.toLowerCase().includes(searchCity.toLowerCase()))
        setFilteredLocations(filteredListByCity)
    }
    function filterListByEventType(){
        const filteredListByEventType = filteredLocations.filter((location) =>
            location.eventType?.toLowerCase().includes(searchEventType.toLowerCase()))
        setFilteredLocations(filteredListByEventType)
    }
    function filterListByCapacity(event:ChangeEvent<HTMLInputElement>){
        const value = event.target.value
            if(value === "1"){
                setFilteredLocations(filteredLocations.filter((location) =>
                    location.maxCapacity! < 50))
            }else if(value === "2"){
            setFilteredLocations(filteredLocations.filter((location) =>
                location.maxCapacity! > 50 && location.maxCapacity!<100))
            }else{
                setFilteredLocations(filteredLocations.filter((location) =>
                    location.maxCapacity!>100))
            }

    }
    function filterListByPrice(event:ChangeEvent<HTMLInputElement>){

            setFilteredLocations(filteredLocations.filter((location) =>
                location.pricePerPerson! > minPrice && location.pricePerPerson! < maxPrice))


    }
    function filterListBySize(event:ChangeEvent<HTMLInputElement>){
        const value = event.target.value
        if(value === "1"){
            setFilteredLocations(filteredLocations.filter((location) =>
                location.size! < 100))
        }else if(value === "2"){
            setFilteredLocations(filteredLocations.filter((location) =>
                location.size! > 100 && location.size! < 200))
        }else{
            setFilteredLocations(filteredLocations.filter((location) =>
                location.size!>200))
        }

    }

    function handleCityChange(event:ChangeEvent<HTMLInputElement>) {
        setSearchCity(event.target.value)
    }

    function handleEventType(event:ChangeEvent<HTMLInputElement>) {
        setSearchEventType(event.target.value)
    }

    function handleMaxPriceValue(event:ChangeEvent<HTMLInputElement>) {
        setMaxPrice(parseInt(event.target.value))
    }
    function handleMinPriceValue(event:ChangeEvent<HTMLInputElement>) {
        setMinPrice(parseInt(event.target.value))
    }

    function handleCapacity(event:ChangeEvent<HTMLInputElement>) {
        setSearchCapacity(event.target.value)
    }
    function handleSize(event:ChangeEvent<HTMLInputElement>) {
        setSearchSize(event.target.value)
    }

    const locationComponent = props.locations.map((location: LocationData) => {
        return <LocationCard location={location} key={location.id}/>
    })

    return(
        <div className={"card-gallery"}>
            <form>
                <label htmlFor="City">Stadt:</label>
                <input name="City" value={searchCity} onChange = {handleCityChange}/>
                <fieldset className = {"price-input"}>
                    <h3>Preis:</h3>
                    <div>
                        <div>
                            <label htmlFor="Min">Min:</label>
                            <input type="number" className="Min" name="minPrice"
                                   value={minPrice} onChange={handleMinPriceValue}/>

                        </div>
                        <div>-</div>
                        <div>
                            <label htmlFor="Max">Max:</label>
                            <input type="number" className="Max" name="maxPrice"
                                   value={maxPrice} onChange={handleMaxPriceValue}/>

                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <h3>Fläche:</h3>

                    <div>
                        <input type="checkbox" id="hundert" name="hundert"
                               onChange = {handleSize} value = {1}/>
                        <label htmlFor="hundert">0-100 m2</label>
                    </div>

                    <div>
                        <input type="checkbox" id="zweihundert" name="zweihundert"
                               onChange = {handleSize} value = {2}/>
                        <label htmlFor="zweihundert">100-200 m2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="überzweihundert" name="überzweihundert"
                               onChange = {handleSize} value = {3}/>
                        <label htmlFor="überzweihundert">über 200 m2</label>
                    </div>
                </fieldset>
                <fieldset>
                    <h3>Anlass:</h3>

                    <div>
                        <input type="checkbox" id="hochzeit" name="hochzeit"
                               onChange = {handleEventType} />
                        <label htmlFor="hochzeit">Hochzeit</label>
                    </div>

                    <div>
                        <input type="checkbox" id="party" name="party"
                               onChange = {handleEventType}/>
                        <label htmlFor="party">Party</label>
                    </div>

                    <div>
                        <input type="checkbox" id="tagung" name="tagung"
                               onChange = {handleEventType}/>
                        <label htmlFor="tagung">Tagung</label>
                    </div>
                    <div>
                        <input type="checkbox" id="konferenz" name="konferenz"
                               onChange = {handleEventType}/>
                        <label htmlFor="konferenz">Konferenz</label>
                    </div>
                </fieldset>
                <fieldset>
                    <h3>Personenanzahl:</h3>


                    <div>
                        <input type="checkbox" id="zehn" name="zehn" value = {1}
                               onChange = {handleCapacity}/>
                        <label htmlFor="zehn">0-50 Personen</label>
                    </div>

                    <div>
                        <input type="checkbox" id="hundert" name="hundert"
                               onChange = {handleCapacity} value = {2}/>
                        <label htmlFor="hundert">50-100 Personen</label>
                    </div>
                    <div>
                        <input type="checkbox" id="übereinhundert" name="übereinhundert"
                               onChange = {handleCapacity} value = {3}/>
                        <label htmlFor="übereinhundert">über 100 Personen</label>
                    </div>
                </fieldset>
                <Button>Suchen</Button>
            </form>

            {locationComponent}


        </div>
    )
}