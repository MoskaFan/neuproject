import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";
import "../styles/SiLoLoc.css"
import {LocationData} from "../entity/locationData";
import {useNavigate} from "react-router-dom";



type AddLocationProps = {
    addLocation(ownerId: string, newLocation: LocationData): void;
}

export default function AddLocation(props: AddLocationProps) {
    const navigate = useNavigate();

    const [location, setLocation] = useState({
        name: "",
        image: "",
        description: "",
        website: "",
        pricePerPerson: 0,
        size: 0,
        eventType: "",
        maxCapacity: 0,
        address:{
            country: "",
            city: "",
            zipCode: "",
            street: "",
            houseNumber: "",
        },
        startDate: "",
        endDate: ""
    });

    const [ownerId] = useState<string>("")


    function handleChangeLocation (event: ChangeEvent<HTMLInputElement>)  {
        const{name, value} = event.target;
            setLocation({...location,
                [name]: value
            });
        }

    function handleChangeAddress (event: ChangeEvent<HTMLInputElement>)  {
        const{name, value} = event.target;

            setLocation({...location, address:{
                        ...(location.address), [name]: value,
                    }
                });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.addLocation(ownerId, location)
        setLocation({...location})
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
                    onChange={handleChangeLocation}/>
                <br/>
                <label htmlFor="image">Image von Location: </label><br/>
                <input
                    type="text"
                    name="image"
                    value={location.image}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="website">Website von Location: </label><br/>
                <input
                    type="text"
                    name="website"
                    value={location.website}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="description">Beschreibung von Location: </label><br/>
                <input
                    type="area"
                    name="description"
                    value={location.description}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="pricePerPerson">Preis prop Person: </label><br/>
                <input
                    type="number"
                    name="pricePerPerson"
                    value={location.pricePerPerson}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="size">Fläche: </label><br/>
                <input
                    type="number"
                    name="size"
                    value={location.size}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="eventType">Anlass: </label><br/>
                <input
                    type="text"
                    name="eventType"
                    value={location.eventType}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="maxCapacity">Maximale Kapazität: </label><br/>
                <input
                    type="number"
                    name="maxCapacity"
                    value={location.maxCapacity}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="country">Land: </label><br/>
                <input
                    type="text"
                    name="country"
                    value={location.address.country}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="city">Stadt: </label><br/>
                <input
                    type="text"
                    name="city"
                    value={location.address.city}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="zipCode">PLZ: </label><br/>
                <input
                    type="text"
                    name="zipCode"
                    value={location.address.zipCode}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="street">Strasse: </label><br/>
                <input
                    type="text"
                    name="street"
                    value={location.address.street}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="houseNummer">Hausnummer: </label><br/>
                <input
                    type="text"
                    name="houseNumber"
                    value={location.address.houseNumber}
                    onChange={handleChangeAddress}/><br/>
                <label>Seit wann ist die Location verfügbar?</label><br/>
                <input
                    type={"date"}
                    name={"startDate"}
                    value={location.startDate}
                    onChange={handleChangeLocation}/><br/>
                <label>Bis wann ist die Location verfügbar?</label><br/>
                <input
                    type={"date"}
                    name={"endDate"}
                    value={location.endDate}
                    onChange={handleChangeLocation}/><br/>
                <Button type="submit" className={"btn"}>Speichern</Button><br/>
            </div>
        </form>

    );
}
