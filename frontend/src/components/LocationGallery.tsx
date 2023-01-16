import {LocationData} from "../entity/locationData";
import LocationCard from "./LocationCard";
import {ChangeEvent, useEffect, useState} from "react";
import "../styles/Gallery.css"
import {FormControl, Input, InputLabel,  Typography} from "@mui/material";


type LocationGalleryProps = {
    locations: LocationData[]
}

export default function LocationGallery(props: LocationGalleryProps) {


    const [searchCity, setSearchCity] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState(null);
    const [searchCapacity, setCapacity] = useState(null);
    const [searchEventType, setSearchEventType] = useState(null);
    const [list, setList] = useState(props.locations);

    const handleChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
        if (searchCity.startsWith("")) {
            console.log("Empty")
            setSearchCity("")
        }
        console.log("No empty")
        setSearchCity(event.target.value)
    }
    const handleChangeCapacity = (event: ChangeEvent<HTMLInputElement>) => {
        if (searchCity.startsWith("")) {
            console.log("Empty")
            setSearchCity("")
        }
        console.log("No empty")
        setSearchCity(event.target.value)
    }

    const applyFilter = () => {
        let updatedList: LocationData[] = props.locations
        if (searchCity) {
            updatedList = updatedList.filter(
                (location) => location.address!.city.toLowerCase()
                    .includes(searchCity.toLowerCase())
            )
        }
        if (searchCapacity) {
            updatedList = updatedList.filter(
                (location) => location.maxCapacity! <= parseInt(searchCapacity))
        }
        setList(updatedList)

    }
    const results = list.map((location)=>{
        return <LocationCard location={location} key={location.id}/>})

    useEffect(() => {
        applyFilter();
    }, [searchCity, searchCapacity])

    // const [locations, setLocations] = useState<LocationData[]>([])
    // const [name, setName] = useState('');
//
// const filter = (e: ChangeEvent<HTMLInputElement>) => {
//         const keyword = e.target.value;
//         if (keyword!== ""){
//             const results = props.locations.filter((location) => {
//                 return location.address!.city.toLowerCase().includes(keyword.toLowerCase()) ||
//                     location.pricePerPerson! <= parseInt(keyword) ||
//                     location.maxCapacity! <= parseInt(keyword) ||
//                     location.eventType!.toLowerCase().includes(keyword.toLowerCase())
//             })
//             setLocations(results)
// }else{setLocations(props.locations)
//         }
//         setName(keyword)
// }

    // const result = filter.map((location: LocationData)=>{
    //     return <LocationCard location={location} key={location.id}/>
    // })

    // const filterByCity = props.locations.filter((location) => {
    //     return searchCity !== ""&& location.address!.city.includes(searchCity)
    // })
    //
    // const filterByPrice = props.locations.filter((location) => {
    //     return maxPrice !== "" && location.pricePerPerson! < parseInt(maxPrice)
    // })
    // const filterByCapacity = props.locations.filter((location) => {
    //     return searchCapacity !== "" && location.maxCapacity! <= parseInt(searchCapacity)
    // })
    //
    // const filterByEventType = props.locations.filter((location) => {
    //     return searchEventType !== "" && location.eventType!
    //         .toLowerCase().includes(searchEventType.toLowerCase())
    // })
    //
    //
    // const locationCardsCity =
    //     filterByCity.map((location: LocationData) => {
    //         return <LocationCard location={location} key={location.id}/>
    //     })
    //
    // const locationCardsPrice =
    //     filterByPrice.map((location: LocationData) => {
    //         return <LocationCard location={location} key={location.id}/>
    //     })
    // const locationCardsCapacity =
    //     filterByCapacity.map((location: LocationData) => {
    //         return <LocationCard location={location} key={location.id}/>
    //     })
    // const locationCardsEventType =
    //     filterByEventType.map((location: LocationData) => {
    //         return <LocationCard location={location} key={location.id}/>
    //     })

    return (
        <section>
            <img alt="location"
                 src="https://www.eventano.com/app/uploads/2021/08/freiheit15-trauung-1680x600.jpg"/><Typography
            variant={"h6"} className={"title"}>Geben Sie die Suchkriterien ein:</Typography>
                    <section>
                        <section className={"search-element"}>
                            <form className="search-bar">

                                <FormControl variant="standard">
                                    <InputLabel htmlFor="City">Stadt: </InputLabel><br/>
                                    <Input name="location.address.city" onChange={handleChangeCity}/>
                                </FormControl>

                                <FormControl variant="standard" className={"price-input"}>

                                    <InputLabel htmlFor="Max">Max Preis: </InputLabel><br/>
                                    <Input type="number" className="maxPrice" name="location.pricePerPerson"
                                    />
                                </FormControl>

                                <FormControl variant="standard">
                                    <InputLabel htmlFor="anlass">Anlass: </InputLabel><br/>
                                    <Input type="text" className="eventType" name="location.eventType"
                                    />
                                </FormControl>

                                <FormControl variant="standard">
                                    <InputLabel htmlFor="zehn">Max Personenanzahl: </InputLabel><br/>
                                    <Input type="number" className="maxCapacity" name="location.maxCapacity"
                                           onChange={handleChangeCapacity}/>

                                </FormControl>
                            </form>
                        </section>
                        <section className={"cards"}>
                            {results}
                        </section>
                    </section>
        </section>

    )
}