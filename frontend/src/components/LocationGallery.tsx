import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {ChangeEvent, useState} from "react";


type LocationGalleryProps = {
    locations: LocationData[];
}

export default function LocationGallery(props: LocationGalleryProps){

    const [searchCity, setSearchCity] = useState("")
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [searchSize, setSearchSize] = useState("")
    const [searchCapacity, setSearchCapacity] = useState("")
    const [searchEventType, setSearchEventType] = useState("")

    const filteredCity = props.locations.filter((location) =>
        location.address.city.toLowerCase().includes(searchCity.toLowerCase()))
    function handleCityChange(event:ChangeEvent<HTMLInputElement>) {
        setSearchCity(searchCity)
    }
    function handleEventType(event:ChangeEvent<HTMLInputElement>) {
        setSearchEventType(searchEventType)
    }

    function handleMaxPriceValue(event:ChangeEvent<HTMLInputElement>) {
        setMaxPrice(maxPrice)

    }
    function handleMinPriceValue(event:ChangeEvent<HTMLInputElement>) {
        setMinPrice(minPrice)

    }

    function handleCapacity(event:ChangeEvent<HTMLInputElement>) {
        setSearchCapacity(searchCapacity)
    }
    function handleSize(event:ChangeEvent<HTMLInputElement>) {
        setSearchSize(searchSize)
    }
    // const filteredPrice = props.locations.filter((location:LocationData,
    //                                               ) =>

        // if(searchPrice===0 || searchPrice===10000){
        //     return 0<location.price<10000;
        // }else{
        //     return 0<location.price<searchPrice;
        // }
        //     location.pricePerPerson?.toString(searchPrice))
 /*   const filteredSize = props.locations.filter((location) =>
        location.size ?
    const filteredCapacity = props.locations.filter((location) =>
        location.capacity?.toLowerCase().includes(searchCity.toLowerCase()))
    const filteredEventType = props.locations.filter((location) =>
        location.eventType?.toLowerCase().includes(searchEventType.toLowerCase()))*/



    const locationComponent = props.locations.map((location: LocationData) => {
        return <LocationCard location={location} key={location.id}/>
    })

    return(
        <div className={"card-gallery"}>
            <label htmlFor="City">Stadt:</label>
            <input name="City" value={searchCity} onChange = {handleCityChange}/>
            <fieldset className = {"price-input"}>
                <h3>Preis:</h3>
                <div>
                    <div>
                        <label htmlFor="Min">Min:</label>
                        <input type="number" className="Min" name="Min"
                             value={minPrice} onChange={handleMinPriceValue}/>

                    </div>
                    <div>-</div>
                    <div>
                        <label htmlFor="Max">Max:</label>
                        <input type="number" className="Max" name="Max"
                                value={maxPrice} onChange={handleMaxPriceValue}/>

                    </div>
                </div>
            </fieldset>
            <fieldset>
                <h3>Fläche:</h3>

                <div>
                    <input type="checkbox" id="hundert" name="hundert"
                           onChange = {handleSize}/>
                        <label htmlFor="hundert">0-100 m2</label>
                </div>

                <div>
                    <input type="checkbox" id="zweihundert" name="zweihundert"
                           onChange = {handleSize}/>
                        <label htmlFor="zweihundert">100-200 m2</label>
                </div>
                <div>
                    <input type="checkbox" id="überzweihundert" name="überzweihundert"
                           onChange = {handleSize}/>
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
                    <input type="checkbox" id="zehn" name="zehn"
                           onChange = {handleCapacity}/>
                    <label htmlFor="zehn">0-50 Personen</label>
                </div>

                <div>
                    <input type="checkbox" id="hundert" name="hundert"
                           onChange = {handleCapacity}/>
                    <label htmlFor="hundert">50-100 Personen</label>
                </div>
                <div>
                    <input type="checkbox" id="übereinhundert" name="übereinhundert"
                           onChange = {handleCapacity}/>
                    <label htmlFor="übereinhundert">über 100 Personen</label>
                </div>
            </fieldset>
            {locationComponent}


        </div>
    )
}