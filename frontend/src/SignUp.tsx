import { Button } from '@mui/material';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import { OwnerData } from './entity/OwnerData';

import './SignUp.css'


type SignUpProps = {
    addOwner(newUser: OwnerData): void;
}

export default function SignUp(props: SignUpProps) {

    const emptyInput: OwnerData = {
        "username": "",
        "password": "",
        "email":"",
        "locationIds":[]

    }


    const [profile, setProfile] = useState(emptyInput);
    const [passwordShown, setPasswordShown] = useState(false);



    function togglePasswordVisiblity(){
        setPasswordShown(!passwordShown);
    }



    function handleChange(e: ChangeEvent<HTMLInputElement>)  {
        e.preventDefault();
        const {name, value} = e.target;
        setProfile((prev) => ({...prev, [name]: value}));
    }

    function handleSubmit (event: FormEvent) {
        event.preventDefault()
        if(profile.username === "" || profile.password === ""){

        }else
        {

            props.addOwner(profile)
            setProfile(emptyInput)
        }


    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1>Sign up</h1>
                </div>

                <div className="form">
                    <label htmlFor="username">Fullname: </label>
                    <input type="text" name="username" value={profile.username} onChange={handleChange} />


                    <label htmlFor="password">Password</label>
                    <input
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        value={profile.password}
                        onChange={handleChange}
                    />
                    <i className="eye" onClick={togglePasswordVisiblity}>
                    </i>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" value={profile.email} onChange={handleChange} />
                    <Button type="submit" className = {"btn"}>Sign Up</Button>

                    </div>
            </form>
        </>
    );
}