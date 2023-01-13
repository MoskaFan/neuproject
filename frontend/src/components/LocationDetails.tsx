import axios from "axios";
import {useEffect, useState} from "react";
import {LocationData} from "../entity/locationData";
import {useNavigate, useParams} from "react-router-dom";

export default function LocationDetails() {

    const params = useParams()

    const id: string | undefined = params.id

    const [location, setLocation] = useState<LocationData>()


    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            getLocationDetailsByID()
        }
        //eslint-disable-next-line
    }, [])

    function getLocationDetailsByID() {

        axios.get("/api/locations/" + id)
            .then(response => {
                console.log(response.data)
                setLocation(response.data)
            })
    }


    return(
        <div>{location?
            <section>
                <h1>{location.name}</h1>
               {location.description}<br/>
                src={location.image}<br/>
                {location.maxCapacity}<br /><br />


            </section>
            : <p>Loading...</p>

        }
            <button onClick={() => navigate("/locations")}>Go back</button>
        </div>
    )
}