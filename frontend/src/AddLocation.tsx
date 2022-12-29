
import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";
import { LocationData} from "./entity/LocationData";
import './SignUp.css'



type AddLocationProps = {
    addLocation(newLocation: LocationData): void;
}

export default function AddLocation(props: AddLocationProps) {

    const emptyInput: LocationData = {

        name:"",
        image:"",
        description:"",
        website:"",
        pricePerPerson:"",
        size: "",
        eventType:"",
        maxCapacity: "",

    }


    const [location, setLocation] = useState(emptyInput);







    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setLocation((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

            props.addLocation(location)
            setLocation(emptyInput)
        }





    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1>Location anlegen</h1>
                </div>
                <div className="form">
                    <label htmlFor="name">Bezeichnung von Location: </label>
                    <input type="text" name="name" value={location.name} onChange={handleChange} />

                    <label htmlFor="image">Image von Location: </label>
                    <input type="text" name="image" value={location.image} onChange={handleChange} />

                    <label htmlFor="website">Website von Location: </label>
                    <input type="text" name="website" value={location.website} onChange={handleChange} />
                <label htmlFor="description">Beschreibung von Location: </label>
                <input type="area" name="description" value={location.description} onChange={handleChange} />
                <label htmlFor="pricePerPerson">Preis prop Person: </label>
                <input type="number" name="pricePerPerson" value={location.pricePerPerson} onChange={handleChange} />
                <label htmlFor="size">Fläche: </label>
                <input type="number" name="size" value={location.size} onChange={handleChange} />
                <label htmlFor="eventType">Anlass: </label>
                <input type="text" name="eventType" value={location.eventType} onChange={handleChange} />
                <label htmlFor="maxCapacity">Maximale Kapazität: </label>
                <input type="number" name="maxCapacity" value={location.maxCapacity} onChange={handleChange} />
                    <Button type="submit" className = {"btn"}>Speichern</Button>

                </div>

            </form>
        </>
    );
}