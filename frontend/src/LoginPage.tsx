import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type LoginPageProps = {
    login: (username: string, password: string) => Promise<string>
}

export default function LoginPage(props: LoginPageProps) {

    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    function onUsernameChange(event: ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value)
    }

    function onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }


    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        props.login(username, password)
            .then(() => {
                navigate("/api/locations/newlocation")
            })

    }


    return (
        <div className={"LoginPage"}>
            <form onSubmit={onSubmit} className={"LoginForm"}>
                <label>Fullname: </label>
                <input type={"text"} value={username} onChange={onUsernameChange} className={"Textfield"}/><br/>
                <label>Password: </label>
                <input type={"password"} value={password} onChange={onPasswordChange} className={"Textfield"}/><br/>
                <Button type={"submit"} className={"LoginButton"}>Login</Button>
            </form>
        </div>
    )

}