
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Button} from "@mui/material";
import { LocationData} from "./modell/LocationData";




type AddLocationProps = {
    addLocation(newLocation: LocationData): void;
}

export default function AddLocation(props: AddLocationProps) {

    const emptyInput: LocationData = {

        name:"",
        image:"",
        description:"",
        website:"",
        pricePerPerson:0,
        size: 0.0,
        eventType:"",
        maxCapacity: 0,
        address: {"country":"",
        "city":"",
        "zipCode":"",
        "Street":"",
        "houseNumber":""},
        startDate: {"year":0,
        "month": 0,
        "dayOfMonth":0},
        endDate: {"year":0,
            "month": 0,
            "dayOfMonth":0}
    }


    const [location, setLocation] = useState(emptyInput);


    useEffect(()=>{

    }, [location])




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
                <label htmlFor="maxCapacity">Anlass: </label>
                <input type="number" name="maxCapacity" value={location.maxCapacity} onChange={handleChange} />
                    <Button type="submit" className = {"btn"}>Speichern</Button>



            </form>
        </>
    );
}