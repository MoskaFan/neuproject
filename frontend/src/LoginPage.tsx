import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

import './SignUp.css'
type LoginPageProps = {
    login: (username: string, password: string) => Promise<void>
}

export default function LoginPage(props: LoginPageProps) {

    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    function handleUserNameChange(event: ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value)
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.login(username, password)
            .then(() => {

                navigate("/api/locations/newlocation")
            })

    }


    return (

            <form onSubmit={handleSubmit} >
                <div className="form-header">
                    <h1>Login</h1>
                </div>
                <div className="form">
                <label>Fullname: </label>
                <input type={"text"} value={username} onChange={handleUserNameChange} className={"Textfield"}/><br/>
                <label>Password: </label>
                <input type={"password"} value={password} onChange={handlePasswordChange} className={"Textfield"}/><br/>

                <Button type={"submit"} className = {"btn"}>Login</Button>
                </div>
            </form>

    )

}