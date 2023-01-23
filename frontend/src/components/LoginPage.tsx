import React, {ChangeEvent, FormEvent, useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../styles/SiLoLoc.css"
import {LoginData} from "../entity/loginData";


type LoginPageProps = {
    login: (owner: LoginData) => Promise<void>
}

export default function LoginPage(props: LoginPageProps) {

    const emptyLoginData: LoginData = {
        "username": "",
        "password": "",
    }
    const [owner, setOwner] = useState(emptyLoginData)
    const navigate = useNavigate()

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setOwner((prevOwner) => ({...prevOwner, [name]: value}));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.login(owner)
            .then((response) => {
                console.log(response)
                setOwner(emptyLoginData)
            })
            .then(() => {
                navigate("/locations")
            })

    }

    return (
        <section className={"section"}>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400}
                 alignItems={"center"} justifyContent={"center"}
                 borderRadius={5} margin={5}
                 padding={3}
                 boxShadow={'5px 5px 10px #ccc'}
                 sx={{
                     ":hover": {
                         boxShadow: '10px 10px 20px #ccc',
                     }
                 }}>

                <Typography variant={"h2"} margin={3}
                            alignItems={"center"}>Einloggen</Typography>

                <TextField
                    name={"username"}
                    placeholder={"username"}
                    margin={"normal"}
                    type={"text"}
                    value={owner.username}
                    onChange={handleChange}
                    className={"Textfield"}
                />

                <TextField
                    name={"password"}
                    margin={"normal"}
                    placeholder={"password"}
                    type={"password"}
                    value={owner.password}
                    onChange={handleChange}
                    className={"Textfield"} />

            <Button sx={{marginTop:3, borderRadius: 3}} type={"submit"} variant="contained"
                    color={"warning"}>Einloggen</Button>
            </Box>
        </form>
        </section>
    )

}