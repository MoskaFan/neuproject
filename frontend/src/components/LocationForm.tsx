import {OwnerData} from "../entity/ownerData";
import {LocationData} from "../entity/locationData";
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {
    Accordion, AccordionDetails,
    AccordionSummary, Box,
    Button, InputLabel,
    TextField, Typography,

} from "@mui/material";
import axios from "axios";
import "../styles/SiLoLoc.css"

type LocationFormProps = {
    location: LocationData
    submitLocation: (location: LocationData) => void
}


export default function LocationForm(props: LocationFormProps) {

    const [newLocation, setLocation] = useState<LocationData>(props.location)

    function handleChangeLocation(event: ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value
        const nameOfInput = event.target.name
        setLocation((prevState) => ({...prevState, [nameOfInput]: inputValue}))
    }

    function handleChangeAddress(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setLocation({
            // @ts-ignore
            ...newLocation, address: {
                ...(newLocation.address), [name]: value,
            }
        });
    }
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.submitLocation(newLocation)
    }

    return (
        <section className={"section"}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection={"column"} maxWidth={400}
                     borderRadius={5} margin={5}
                     alignItems={"center"} justifyContent={"center"}
                     padding={3}
                     boxShadow={'5px 5px 10px #ccc'}
                     sx={{
                         ":hover": {
                             boxShadow: '10px 10px 20px #ccc',
                             flexGrow: 1
                         }
                     }}>
                    <h1>Locationsform:</h1>
                    <TextField
                        type="text"
                        name="city"
                        fullWidth
                        placeholder={"Stadt"}
                        margin={"dense"}
                        value={newLocation.address!.city}
                        onChange={handleChangeAddress}/>

                    <TextField
                        type="text"
                        fullWidth
                        margin={"dense"}
                        placeholder={"name"}
                        name="name"
                        value={newLocation.name}
                        onChange={handleChangeLocation}/>

                    <TextField
                        type="text"
                        fullWidth
                        margin={"dense"}
                        name="image"
                        placeholder={"image"}
                        value={newLocation.image}
                        onChange={handleChangeLocation}/>


                    <TextField
                        type="area"
                        fullWidth
                        margin={"dense"}
                        placeholder={"description"}
                        name="description"
                        value={newLocation.description}
                        onChange={handleChangeLocation}/>
                    <InputLabel htmlFor={"maxCapacity"}>Max Personenanzahl:</InputLabel>
                    <TextField
                        type="number"
                        fullWidth
                        margin={"dense"}
                        name="maxCapacity"
                        placeholder={"Max PersonenAnzahl"}
                        value={newLocation.maxCapacity}
                        onChange={handleChangeLocation}/>
                    <InputLabel htmlFor={"pricePerPerson"}>Preis pro Person:</InputLabel>
                    <TextField
                        type="number"
                        fullWidth
                        margin={"dense"}
                        placeholder={"Preis pro Person"}
                        name="pricePerPerson"
                        value={newLocation.pricePerPerson}
                        onChange={handleChangeLocation}/>


                    <Accordion id={"panel1-header"}
                               aria-controls={"panel1-content"}>
                        <AccordionSummary>
                            <Typography>Zusätzliche Daten</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <InputLabel htmlFor={"pricePerPerson"}>Seit wann ist die Location verfügbar?</InputLabel>
                            <TextField
                                type={"date"}
                                placeholder={"Seit wann ist die Location verfügbar?"}
                                fullWidth
                                name={"startDate"}
                                margin={"dense"}
                                value={newLocation.startDate}
                                onChange={handleChangeLocation}/>
                            <InputLabel htmlFor={"pricePerPerson"}>Bis wann ist die Location verfügbar?</InputLabel>
                            <TextField
                                type={"date"}
                                fullWidth
                                name={"endDate"}
                                margin={"dense"}
                                placeholder={"Bis wann ist die Location verfügbar?"}
                                value={newLocation.endDate}
                                onChange={handleChangeLocation}/>
                            <TextField
                                type="text"
                                fullWidth
                                margin={"dense"}
                                name="website"
                                placeholder={"Link zu Webseite"}
                                value={newLocation.website}
                                onChange={handleChangeLocation}/>
                            <InputLabel htmlFor={"size"}>Fläche:</InputLabel>
                            <TextField
                                type="number"
                                fullWidth
                                margin={"dense"}
                                name="size"
                                value={newLocation.size}
                                onChange={handleChangeLocation}/>

                            <TextField
                                type="text"
                                fullWidth
                                margin={"dense"}
                                name="eventType"
                                placeholder={"Anlass"}
                                value={newLocation.eventType}
                                onChange={handleChangeLocation}/>

                            <TextField
                                type="text"
                                name="country"
                                fullWidth
                                placeholder={"Land"}
                                margin={"dense"}
                                value={newLocation.address!.country}
                                onChange={handleChangeAddress}/>



                            <TextField
                                type="text"
                                fullWidth
                                placeholder={"PLZ"}
                                name="zipCode"
                                margin={"dense"}
                                value={newLocation.address!.zipCode}
                                onChange={handleChangeAddress}/>

                            <TextField
                                type="text"
                                fullWidth
                                placeholder={"Strasse"}
                                name="street"
                                margin={"dense"}
                                value={newLocation.address!.street}
                                onChange={handleChangeAddress}/>
                            <TextField
                                type="text"
                                fullWidth
                                name="houseNumber"
                                placeholder={"Hausnummer"}
                                margin={"dense"}
                                value={newLocation.address!.houseNumber}
                                onChange={handleChangeAddress}/>


                        </AccordionDetails>
                    </Accordion>


                    <Button type="submit" sx={{marginTop: 3, borderRadius: 3}} variant="contained"
                            color={"warning"}>Speichern</Button><br/>

                </Box>
            </form>
        </section>
    );
}
