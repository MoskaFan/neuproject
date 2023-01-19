import {

    Box,
    Button,
    InputLabel,
    TextField,

} from "@mui/material";
import React, {ChangeEvent, FormEvent,  useState} from "react";
import {useNavigate} from "react-router-dom";
import { LocationData } from "../entity/locationData";
import { OwnerData } from "../entity/ownerData";

type EditLocationProps = {
    owner: OwnerData,
    location: LocationData
    editLocation (ownerId: string, locationId: string, location: LocationData): void
}

export default function EditLocation(props: EditLocationProps) {
    const navigate = useNavigate();
const id =  props.location.id;

    const [name, setName] = useState(props.location.name);
    const [city, setCity] = useState(props.location.address!.city);
    const [price, setPrice] = useState(props.location.pricePerPerson);
    const [maxCapacity, setMaxCapacity] = useState(props.location.maxCapacity);


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
        props.editLocation(props.owner.id!, props.location.id!, updatedLocation)

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