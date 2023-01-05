import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button, TextField} from "@mui/material";
import '../styles/AddLocation.css'
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
        pricePerPerson: "",
        size: "",
        eventType: "",
        maxCapacity: "",
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
        navigate("/api/locations")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-header">
                <h1>Location anlegen</h1>
            </div>
            <div className="form">
                <label htmlFor="name">Bezeichnung von Location: </label>

                <TextField variant="filled" type="text"
                           name="name"
                           value={location.name}
                           onChange={handleChange}/>
                <br/><br/>
                <label htmlFor="image">Image von Location: </label>
                <input
                    type="text"
                    name="image"
                    value={location.image}
                    onChange={handleChange}/>
                <label htmlFor="website">Website von Location: </label>
                <input
                    type="text"
                    name="website"
                    value={location.website}
                    onChange={handleChange}/>
                <label htmlFor="description">Beschreibung von Location: </label>
                <input
                    type="area"
                    name="description"
                    value={location.description}
                    onChange={handleChange}/>
                <label htmlFor="pricePerPerson">Preis prop Person: </label>
                <input
                    type="number"
                    name="pricePerPerson"
                    value={location.pricePerPerson}
                    onChange={handleChange}/>
                <label htmlFor="size">Fläche: </label>
                <input
                    type="number"
                    name="size"
                    value={location.size}
                    onChange={handleChange}/>
                <label htmlFor="eventType">Anlass: </label>
                <input
                    type="text"
                    name="eventType"
                    value={location.eventType}
                    onChange={handleChange}/>
                <label htmlFor="maxCapacity">Maximale Kapazität: </label>
                <input
                    type="number"
                    name="maxCapacity"
                    value={location.maxCapacity}
                    onChange={handleChange}/>
                <Button type="submit" className={"btn"}>Speichern</Button>
                <label>Seit wann ist die Location verfügbar?</label>
                <input
                    type={"date"}
                    name={"startDate"}
                    value={"location.startDate"}
                    onChange={handleChange}/>
                <label>Bis wann ist die Location verfügbar?</label>
                <input
                    type={"date"}
                    name={"endDate"}
                    value={"location.endDate"}
                    onChange={handleChange}/>
            </div>
        </form>

    );
}

function preventDefault() {
    throw new Error("Function not implemented.");
}
