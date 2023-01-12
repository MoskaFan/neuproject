import {ChangeEvent, FormEvent} from "react";
import {Button} from "@mui/material";
import {LocationData} from "../entity/locationData";


type SearchBarProps = {

    searchCity(searchCity: string): void
    searchEventType(searchEventType: string): void
    searchMinPrice(minPrice: number): void
    searchMaxPrice(maxPrice: number): void
    searchCapacity(searchCapacity: number): void
    searchSize(searchSize: number): void
    handleSubmit(filterLocations: LocationData[]): void

}

export default function SearchBar(props: SearchBarProps){

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.handleSubmit(event.target.value)
    }

return(
        <form handleSubmit = {handleSubmit}>
            <fieldset>
                <h3>Stadt:</h3>
                <label htmlFor="City">Stadt:</label>
                <input name="City" onChange ={(event:ChangeEvent<HTMLInputElement>)=>
                    props.searchCity(event.target.value)}/>
            </fieldset>

            <fieldset className = {"price-input"}>
                <h3>Preis</h3>
                <div>
                    <label htmlFor="Min">Min:</label>
                    <input type="number" className="minPrice" name="minPrice"
                           onChange ={(event:ChangeEvent<HTMLInputElement>)=>
                               props.searchMinPrice(parseInt(event.target.value))}/>
                </div>
                <div>-</div>
                <div>
                    <label htmlFor="Max">Max:</label>
                    <input type="number" className="maxPrice" name="maxPrice"
                           onChange ={(event:ChangeEvent<HTMLInputElement>)=>
                        props.searchMaxPrice(parseInt(event.target.value))}/>
                </div>
            </fieldset>

            <fieldset>
                <h3>Fläche:</h3>
                <div>
                    <label htmlFor="hundert">Max. Fläche: </label>
                    <input type="number" className={"size"} name="size"
                           onChange ={(event:ChangeEvent<HTMLInputElement>)=>
                        props.searchSize(parseInt(event.target.value))} />
                </div>
            </fieldset>

            <fieldset>
                <h3>Anlass:</h3>
                <div>
                    <label htmlFor="hochzeit">Hochzeit</label>
                    <input type="number" className="eventType" name="eventType"
                           onChange ={(event:ChangeEvent<HTMLInputElement>)=>
                        props.searchEventType(event.target.value)}  />
                </div>
            </fieldset>

            <fieldset>
                <h3>Personenanzahl:</h3>
                <div>
                    <label htmlFor="zehn">Max. Personenanzahl</label>
                    <input type="number" className="maxCapacity" name="maxCapacity"
                           onChange ={(event:ChangeEvent<HTMLInputElement>)=>
                        props.searchCapacity(parseInt(event.target.value))}/>
                </div>
            </fieldset>

            <Button>Suchen</Button>
        </form>


)
}