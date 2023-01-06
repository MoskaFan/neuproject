import { Button } from '@mui/material';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import { OwnerData } from '../entity/ownerData';
import "../styles/SiLoLoc.css"

type SignUpProps = {
    addOwner(newUser: OwnerData): void;
}

export default function SignUp(props: SignUpProps) {

    const emptyUserObject: OwnerData = {
        "username": "",
        "password": "",
        "email":"",
        "locations":[]
    }

    const [profile, setProfile] = useState(emptyUserObject);
    const [passwordShown, setPasswordShown] = useState(false);

    function togglePasswordVisiblity(){
        setPasswordShown(!passwordShown);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>)  {
        const {name, value} = event.target;
        setProfile((prevOwner) => ({...prevOwner, [name]: value}));
    }

    function handleSubmit (event: FormEvent) {
        event.preventDefault()
        if(profile.username === "" || profile.password === ""){
            console.log("Bitte geben Sie die Daten")
        }else
        {
            props.addOwner(profile)
            setProfile(emptyUserObject)
        }
    }

    return (
            <form onSubmit={handleSubmit} className="form">
                <div className="form-header">
                    <h1>Sign up</h1>
                </div>

                <div>
                    <label htmlFor="username">Fullname: </label><br/>
                    <input type="text"
                           name="username"
                           value={profile.username}
                           onChange={handleChange} /><br/>
                    <label htmlFor="password">Password: </label><br/>
                    <input
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        value={profile.password}
                        onChange={handleChange}
                    /><br/>
                    <i className="eye" onClick={togglePasswordVisiblity}></i>
                    <label htmlFor="email">Email: </label><br/>
                    <input
                        type="text"
                        name="email"
                        value={profile.email}
                        onChange={handleChange} /><br/>
                    <Button type="submit" className = {"btn"}>Sign Up</Button>
                    </div>
            </form>
    );
}