import {OwnerData} from "../entity/ownerData";
import {LocationData} from "../entity/locationData";
import {useNavigate, useParams} from "react-router-dom";
import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {
    Accordion, AccordionDetails, AccordionSummary,

    Box,
    Button, InputLabel,

    TextField, Typography,

} from "@mui/material";
import axios from "axios";
import "../styles/SiLoLoc.css"
import LocationForm from "./LocationForm";
import useLocation from "../hooks/useLocation";
import UseOwner from "../hooks/UseOwner";



export default function EditForm() {
    const navigate = useNavigate();

    const params = useParams()

    const {id} = useParams()

    const {owner} = UseOwner()

    const{getLocation, editLocation} = useLocation(id)

    if(!getLocation) {
        return <h1>Die Location ist nicht vergeben</h1>
    }

    function submitLocation(location: LocationData){
        editLocation(owner.id!, id!, location)
        navigate("/locations/" + id)
    }




    return (
        <section className={"section"}>
        <LocationForm location={getLocation} submitLocation={submitLocation}></LocationForm>
        </section>
    );
}
