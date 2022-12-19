import React, {ChangeEvent, FormEvent, useState} from 'react';
import { LoginData } from './modell/LoginData';
import axios from 'axios';
import './SignUp.css'




export default function SignUp() {

    const emptyInput: LoginData = {
        "name": "",
        "email": "",
        "password": "",
        "locationIds": []
    }


    const [profile, setProfile] = useState(emptyInput);
    const [passwordShown, setPasswordShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    function refreshPage() {
        window.location.reload();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setProfile((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

            let response = await axios.post("/api/auth/register", JSON.stringify({
                "email": profile.email,
                "name": profile.name,
                "password": profile.password,
                "locationIds": profile.locationIds
            }));
            setSuccessMessage(response.data.message);
            setErrorMessage('');
            setProfile(emptyInput);
            console.log(response.data.message);
        } catch (err: any) {
            let error = err.response.data;

            setErrorMessage(err.response.data);
            setSuccessMessage('');
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1>Sign up</h1>
                </div>

                <div className="form">
                    <label htmlFor="name">Fullname: </label>
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />

                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" value={profile.email} onChange={handleChange} />

                    <label htmlFor="password">Password</label>
                    <input
                        type={passwordShown ? 'text' : 'password'}
                        name="password"
                        value={profile.password}
                        onChange={handleChange}
                    />
                    <i className="eye" onClick={togglePasswordVisiblity}>
                    </i>
                    <button type="submit" className = {"btn"}>Sign Up</button>
                    {errorMessage.length > 0 ? (
                        <div className="error-msg"> {errorMessage} </div>
                    ) : null}
                    {successMessage.length > 0 ? (
                        <div className="success-msg">
                            {successMessage}{' '}
                            <button onClick={refreshPage} className="refresh">
                                Refresh form
                            </button>
                        </div>
                    ) : null}
                </div>
            </form>
        </>
    );
}