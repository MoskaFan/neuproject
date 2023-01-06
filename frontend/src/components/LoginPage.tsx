import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../styles/SiLoLoc.css"
import { LoginData } from "../entity/loginData";

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
            .then(()=> {
                setOwner(emptyLoginData)
            })
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
                <input
                    type={"text"}
                    value={owner.username}
                    name={"username"}
                    onChange={handleChange}
                    className={"Textfield"}/><br/>
                <label>Password: </label>
                <input
                    type={"password"}
                    value={owner.password}
                    name={"password"}
                    onChange={handleChange}
                    className={"Textfield"}/><br/>
                <Button type={"submit"} className = {"btn"}>Login</Button>
                </div>
            </form>

    )

}