import React, {ChangeEvent, FormEvent, useState} from "react";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LocationData} from "../entity/locationData";
import "../styles/SiLoLoc.css"
import { OwnerData } from "../entity/ownerData";




type AddLocationProps = {
    owner: OwnerData
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
    const [open, setOpen] = useState<boolean>(false)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }


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
        props.addLocation(props.owner.id!, location)
        setLocation({...location})
            navigate("/locations")

    }



    return (
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
                <h1>Location anlegen</h1>

                <TextField
                    type="text"
                    fullWidth
                    margin={"dense"}
                    placeholder={"name"}
                    name="name"
                    value={location.name}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="text"
                    fullWidth
                    margin={"dense"}
                    name="image"
                    placeholder={"image"}
                    value={location.image}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="text"
                    fullWidth
                    margin={"dense"}
                    name="website"
                    placeholder={"Link zu Webseite"}
                    value={location.website}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="area"
                    fullWidth
                    margin={"dense"}
                    name="description"
                    value={location.description}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="number"
                    fullWidth
                    margin={"dense"}
                    placeholder={"Preis pro Person"}
                    name="pricePerPerson"
                    value={location.pricePerPerson}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="number"
                    fullWidth
                    margin={"dense"}
                    name="size"
                    value={location.size}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="text"
                    fullWidth
                    margin={"dense"}
                    name="eventType"
                    placeholder={"Anlass"}
                    value={location.eventType}
                    onChange={handleChangeLocation}/>

                <TextField
                    type="number"
                    fullWidth
                    margin={"dense"}
                    name="maxCapacity"
                    placeholder={"Max PersonenAnzahl"}
                    value={location.maxCapacity}
                    onChange={handleChangeLocation}/>
                <TextField
                    type={"date"}
                    placeholder={"Seit wann ist die Location verfügbar?"}
                    fullWidth
                    name={"startDate"}
                    margin={"dense"}
                    value={location.startDate}
                    onChange={handleChangeLocation}/><br/>
                <TextField
                    type={"date"}
                    fullWidth
                    name={"endDate"}
                    margin={"dense"}
                    placeholder={"Bis wann ist die Location verfügbar?"}
                    value={location.endDate}
                    onChange={handleChangeLocation}/><br/>
                <Button onClick={handleOpen}>Adresse hizufügen</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Neue Adresse</DialogTitle>
                    <DialogContent>
                <TextField
                    type="text"
                    name="country"
                    fullWidth
                    placeholder={"Land"}
                    margin={"dense"}
                    value={location.address.country}
                    onChange={handleChangeAddress}/>

                <TextField
                    type="text"
                    name="city"
                    fullWidth
                    placeholder={"Stadt"}
                    margin={"dense"}
                    value={location.address.city}
                    onChange={handleChangeAddress}/>

                <TextField
                    type="text"

                    placeholder={"PLZ"}
                    name="zipCode"
                    margin={"dense"}
                    value={location.address.zipCode}
                    onChange={handleChangeAddress}/>

                <TextField
                    type="text"
                    placeholder={"Strasse"}
                    name="street"
                    margin={"dense"}
                    value={location.address.street}
                    onChange={handleChangeAddress}/>
                <TextField
                    type="text"
                    name="houseNumber"
                    placeholder={"Hausnummer"}
                    margin={"dense"}
                    value={location.address.houseNumber}
                    onChange={handleChangeAddress}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>

                    </DialogActions>
                </Dialog>


                <Button type="submit" sx={{marginTop:3, borderRadius: 3}} variant="contained"
                        color={"warning"}>Speichern</Button><br/>

            </Box>
        </form>

    );
}
