import React, {ChangeEvent, FormEvent, useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LocationData} from "../entity/locationData";




type AddLocationProps = {
    ownerId: string
    addLocation(username: string, newLocation: LocationData): void
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
        address: {
            country: "",
            city: "",
            zipCode: "",
            street: "",
            houseNumber: "",
        },
        startDate: "",
        endDate: ""
    });


    function handleChangeLocation(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setLocation({
            ...location,
            [name]: value
        });
    }

    function handleChangeAddress(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;

        setLocation({
            ...location, address: {
                ...(location.address), [name]: value,
            }
        });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.addLocation(props.ownerId, location)
        setLocation({...location})
            navigate("/locations")

    }

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"}
                 alignItems={"center"} justifyContent={"center"}
                 borderRadius={5} margin={5}
                 padding={3}
                 boxShadow={'5px 5px 10px #ccc'}
                 sx={{
                     ":hover": {
                         boxShadow: '10px 10px 20px #ccc',
                     }
                 }}>
                <h1>Location anlegen</h1>

                <TextField
                    type="text"
                    margin={"normal"}
                    placeholder={"name"}
                    name="name"
                    value={location.name}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="text"
                    margin={"normal"}
                    name="image"
                    placeholder={"image"}
                    value={location.image}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="text"
                    margin={"normal"}
                    name="website"
                    placeholder={"Link zu Webseite"}
                    value={location.website}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="area"
                    margin={"normal"}
                    name="description"
                    value={location.description}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="number"
                    margin={"normal"}
                    placeholder={"Preis pro Person"}
                    name="pricePerPerson"
                    value={location.pricePerPerson}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="number"
                    margin={"normal"}
                    name="size"
                    value={location.size}
                    onChange={handleChangeLocation}/><br/>

                <TextField
                    type="text"
                    name="eventType"
                    margin={"normal"}
                    placeholder={"Anlass"}
                    value={location.eventType}
                    onChange={handleChangeLocation}/><br/>

                <TextField
                    type="number"
                    name="maxCapacity"
                    margin={"normal"}
                    placeholder={"Max PersonenAnzahl"}
                    value={location.maxCapacity}
                    onChange={handleChangeLocation}/><br/>
                <label htmlFor="country">Land: </label><br/>
                <TextField
                    type="text"
                    name="country"
                    margin={"normal"}
                    value={location.address.country}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="city">Stadt: </label><br/>
                <TextField
                    type="text"
                    name="city"
                    margin={"normal"}
                    value={location.address.city}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="zipCode">PLZ: </label><br/>
                <TextField
                    type="text"
                    name="zipCode"
                    margin={"normal"}
                    value={location.address.zipCode}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="street">Strasse: </label><br/>
                <TextField
                    type="text"
                    name="street"
                    margin={"normal"}
                    value={location.address.street}
                    onChange={handleChangeAddress}/><br/>
                <label htmlFor="houseNummer">Hausnummer: </label><br/>
                <TextField
                    type="text"
                    name="houseNumber"
                    margin={"normal"}
                    value={location.address.houseNumber}
                    onChange={handleChangeAddress}/><br/>
                <label>Seit wann ist die Location verfügbar?</label><br/>
                <TextField
                    type={"date"}
                    placeholder={"Seit wann ist die Location verfügbar?"}
                    name={"startDate"}
                    margin={"normal"}
                    value={location.startDate}
                    onChange={handleChangeLocation}/><br/>
                <label>Bis wann ist die Location verfügbar?</label><br/>
                <TextField
                    type={"date"}
                    name={"endDate"}
                    margin={"normal"}
                    value={location.endDate}
                    onChange={handleChangeLocation}/><br/>
                <Button type="submit" sx={{marginTop:3, borderRadius: 3}} variant="contained"
                        color={"warning"}>Speichern</Button><br/>

            </Box>
        </form>

    );
}
