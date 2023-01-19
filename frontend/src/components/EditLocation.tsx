import {

    Box,
    Button,
    InputLabel,
    TextField,

} from "@mui/material";
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { LocationData } from "../entity/locationData";
import { OwnerData } from "../entity/ownerData";
import axios from "axios";

type EditLocationProps = {
    owner: OwnerData,
    editLocation (ownerId: string, locationId: string, location: LocationData): void
}

export default function EditLocation(props: EditLocationProps) {
    const params = useParams()

    const locationId: string | undefined = params.locationId
    useEffect(() => {
        if (locationId) {
            getLocationDetailsByID(locationId)
        }

    }, [locationId])

    const [location, setLocation] = useState<LocationData>()

    function getLocationDetailsByID(locationId: string) {

        axios.get("/api/locations/" + locationId)
            .then(response => {
                console.log(response.data)
                setLocation(response.data)
            })
            .catch(console.error)
    }
    const navigate = useNavigate();
const id =  location.id;

    const [name, setName] = useState(location.name);
    const [city, setCity] = useState(location.address!.city);
    const [price, setPrice] = useState(location.pricePerPerson);
    const [maxCapacity, setMaxCapacity] = useState(location.maxCapacity);


    function handleChangeCity(event: ChangeEvent<HTMLInputElement>) {
       setCity(event.target.value)
    }
    function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value)
    }
    function handleChangePrice(event: ChangeEvent<HTMLInputElement>) {
        setPrice(parseInt(event.target.value))
    }
    function handleChangeMaxCapacity(event: ChangeEvent<HTMLInputElement>) {
        setMaxCapacity(parseInt(event.target.value))
    }

    const updatedLocation = {id, name, city, price, maxCapacity}

    async function handleEditSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.editLocation(props.owner.id!, location.id!, updatedLocation)

        navigate("/locations")

    }

    return (
        <section>
            <form onSubmit={handleEditSubmit}>
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
                        name="city"
                        fullWidth
                        placeholder={"Stadt"}
                        margin={"dense"}
                        value={city}
                        onChange={handleChangeCity}/>

                    <TextField
                        type="text"
                        fullWidth
                        margin={"dense"}
                        placeholder={"name"}
                        name="name"
                        value={name}
                        onChange={handleChangeName}/>


                    <TextField
                        type="number"
                        fullWidth
                        margin={"dense"}
                        name="maxCapacity"
                        placeholder={"Max PersonenAnzahl"}
                        value={maxCapacity}
                        onChange={handleChangeMaxCapacity}/>
                    <InputLabel htmlFor={"pricePerPerson"}>Preis pro Person:</InputLabel>
                    <TextField
                        type="number"
                        fullWidth
                        margin={"dense"}
                        placeholder={"Preis pro Person"}
                        name="pricePerPerson"
                        value={price}
                        onChange={handleChangePrice}/>



                    <Button type="submit" sx={{marginTop: 3, borderRadius: 3}} variant="contained"
                            color={"warning"}>Speichern</Button><br/>

                </Box>
            </form>
        </section>
    )
}