import React, { useEffect } from 'react';
import {ChangeEvent, FormEvent, useState} from 'react';
import { LoginData } from './modell/LoginData';
import {Avatar, Box, Button, Container, TextField, Typography} from "@mui/material";


type SignUpProps = {
    addOwner(newOwner: LoginData): void;
}

export default function SignUp(props: SignUpProps) {

    const emptyInput: LoginData = {
        "name": "",
        "email": "",
        "password": "",
        "locationIds": []
    }


    const[submitted, setSubmitted] = useState<boolean>(false);
    const[error, setError] = useState<boolean>(false);

    const [inputValue, setInputValue] = useState(emptyInput)

    useEffect(()=>{

    }, [inputValue])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(inputValue.name === "" || inputValue.password === ""){
            setError(true);
        }else
        {
            setSubmitted(true);
            setError(false);
            props.addOwner(inputValue)
            setInputValue(emptyInput)
        }

    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        const fieldName = event.target.name
        const fieldValue = event.target.value

        setInputValue(prevState => ({
            ...prevState, [fieldName]: fieldValue
        }))
    }




    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {inputValue.name} successfully registered!!</h1>
            </div>
        );
    };
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
    <div>
    <Container component="main" maxWidth="xs">

    <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Avatar src="/broken-image.jpg" />
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

            <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={inputValue.name}
                onChange ={handleOnChange}
            />

            <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={inputValue.email}
                onChange ={handleOnChange}
            />

            <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                value={inputValue.password}
                onChange ={handleOnChange}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

            >
                Sign Up
            </Button>

        </Box>
    </Box>
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Typography component="h1" variant="h5">
            Iuliia Atutova
        </Typography>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
</Container>
</div>

    );
}