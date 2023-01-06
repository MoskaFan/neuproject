import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";
import "../styles/SiLoLoc.css"
import {LocationData} from "../entity/locationData";
import {useNavigate} from "react-router-dom";


type AddLocationProps = {
    addLocation(newLocation: LocationData): void;
}

export default function AddLocation(props: AddLocationProps) {

    const emptyLocation: LocationData = {

        name: "",
        image: "",
        description: "",
        website: "",
        pricePerPerson: 0,
        size: 0,
        eventType: "",
        maxCapacity: 0,
        address:{
            "country": "",
            "city": "",
            "zipCode": "",
            "street": "",
            "houseNumber": ""
        },
        startDate: "",
        endDate: ""
    }

    const [location, setLocation] = useState(emptyLocation);
    const navigate = useNavigate()

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setLocation((prevLocation) => ({...prevLocation, [name]: value}));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.addLocation(location)
        setLocation(emptyLocation)
        navigate("/locations")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <h1>Location anlegen</h1>
            </div>
            <div className="form">
                <label htmlFor="name">Bezeichnung von Location: </label><br/>

                <input
                    type="text"
                    name="name"
                    value={location.name}
                    onChange={handleChange}/>
                <br/>
                <label htmlFor="image">Image von Location: </label><br/>
                <input
                    type="text"
                    name="image"
                    value={location.image}
                    onChange={handleChange}/><br/>
                <label htmlFor="website">Website von Location: </label><br/>
                <input
                    type="text"
                    name="website"
                    value={location.website}
                    onChange={handleChange}/><br/>
                <label htmlFor="description">Beschreibung von Location: </label><br/>
                <input
                    type="area"
                    name="description"
                    value={location.description}
                    onChange={handleChange}/><br/>
                <label htmlFor="pricePerPerson">Preis prop Person: </label><br/>
                <input
                    type="number"
                    name="pricePerPerson"
                    value={location.pricePerPerson}
                    onChange={handleChange}/><br/>
                <label htmlFor="size">Fläche: </label><br/>
                <input
                    type="number"
                    name="size"
                    value={location.size}
                    onChange={handleChange}/><br/>
                <label htmlFor="eventType">Anlass: </label><br/>
                <input
                    type="text"
                    name="eventType"
                    value={location.eventType}
                    onChange={handleChange}/><br/>
                <label htmlFor="maxCapacity">Maximale Kapazität: </label><br/>
                <input
                    type="number"
                    name="maxCapacity"
                    value={location.maxCapacity}
                    onChange={handleChange}/><br/>
                <label htmlFor="country">Land: </label><br/>
                <input
                    type="text"
                    name="country"
                    value={location.address?.country}
                    onChange={handleChange}/><br/>
                <label htmlFor="city">Stadt: </label><br/>
                <input
                    type="text"
                    name="city"
                    value={location.address?.city}
                    onChange={handleChange}/><br/>
                <label htmlFor="zipCode">PLZ: </label><br/>
                <input
                    type="text"
                    name="zipCode"
                    value={location.address?.zipCode}
                    onChange={handleChange}/><br/>
                <label htmlFor="street">Strasse: </label><br/>
                <input
                    type="text"
                    name="street"
                    value={location.address?.street}
                    onChange={handleChange}/><br/>
                <label htmlFor="houseNummer">Hausnummer: </label><br/>
                <input
                    type="text"
                    name="houseNummer"
                    value={location.address?.houseNumber}
                    onChange={handleChange}/><br/>
                <label>Seit wann ist die Location verfügbar?</label><br/>
                <input
                    type={"date"}
                    name={"startDate"}
                    value={location.startDate}
                    onChange={handleChange}/><br/>
                <label>Bis wann ist die Location verfügbar?</label><br/>
                <input
                    type={"date"}
                    name={"endDate"}
                    value={location.endDate}
                    onChange={handleChange}/><br/>
                <Button type="submit" className={"btn"}>Speichern</Button><br/>
            </div>
        </form>

    );
}
