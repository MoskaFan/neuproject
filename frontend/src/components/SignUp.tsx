import {Box, Button, TextField, Typography} from '@mui/material';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {OwnerData} from '../entity/ownerData';
import "../styles/SiLoLoc.css"

type SignUpProps = {
    addOwner(newUser: OwnerData): void;
}

export default function SignUp(props: SignUpProps) {

    const emptyUserObject: OwnerData = {
        "username": "",
        "password": "",
        "email": "",
        "locations": []
    }

    const [profile, setProfile] = useState(emptyUserObject);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setProfile((prevOwner) => ({...prevOwner, [name]: value}));
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (profile.username === "" || profile.password === "") {
            console.log("Bitte geben Sie die Daten")
        } else {
            props.addOwner(profile)
            setProfile(emptyUserObject)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <Box display="flex" flexDirection={"column"} maxWidth={400}
                 alignItems={"center"} justifyContent={"center"}
                 borderRadius={5} margin={5}
                 padding={3}
                 boxShadow={'5px 5px 10px #ccc'}
                 sx={{
                     ":hover": {
                         boxShadow: '10px 10px 20px #ccc',
                     flexGrow: 1
                     }
                 }}>

                <Typography variant={"h2"} margin={3}
                            alignItems={"center"} >
                    Registrieren
                </Typography>

                <TextField name="username"
                           margin={"normal"}
                           type={"text"}
                           placeholder={"username"}
                           value={profile.username}
                           onChange={handleChange}/>

                <TextField type={"password"}
                           margin={"normal"}
                           placeholder={"password"}
                           name="password"
                           value={profile.password}
                           onChange={handleChange}/>

                <TextField type="email"
                           margin={"normal"}
                           placeholder={"email"}
                           name="email"
                           value={profile.email}
                           onChange={handleChange}/>

                <Button sx={{marginTop:3, borderRadius: 3}} type="submit" variant="contained"
                        color={"warning"}>Registrieren</Button>

            </Box>

        </form>
    );
}