import axios from "axios";
import {useEffect, useState} from "react";
import {LocationData} from "../entity/locationData";
import {useNavigate, useParams} from "react-router-dom";
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import Calendar from 'react-calendar';
import "../styles/LocationDetails.css";




export default function LocationDetails() {


    const params = useParams()

    const id: string | undefined = params.id

    const [location, setLocation] = useState<LocationData>()


    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            getLocationDetailsByID(id)
        }

    }, [id])

    function getLocationDetailsByID(id: string) {

        axios.get("/api/locations/" + id)
            .then(response => {
                console.log(response.data)
                setLocation(response.data)
            })
            .catch(console.error)
    }

    const [date, setDate] = useState(new Date());


    return (
        <Container className={"location"}>{location ?
            <Box display="flex" flexDirection={"column"} maxWidth={500}
                 alignItems={"center"} justifyContent={"center"}
                 borderRadius={5} margin={5}
                 padding={3} className={"table"}>
                <h1>{location.name}</h1>
                <img alt={""} src={location.image}/>
                {location.description}
                <a href={location.website}>{location.website}</a>
                <TableContainer sx={{maxWidth: 500}} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Anlass</TableCell>
                                <TableCell align="center">Personenanzahl</TableCell>
                                <TableCell align="center">Fläche</TableCell>
                                <TableCell align="center">Adresse</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">{location.pricePerPerson}</TableCell>
                                <TableCell align="center">{location.eventType}</TableCell>
                                <TableCell align="center">{location.maxCapacity}</TableCell>
                                <TableCell align="center">{location.size}</TableCell>
                                <TableCell align="center">{location.address!.zipCode} {location.address!.city},
                                    {location.address!.street},
                                    {location.address!.houseNumber}
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
                <section className={"calendar"}>
                    <Calendar onChange={setDate} value={date}/>
                    <p className='text-center'>
                        <span className='bold'>Selected Date:</span>{' '}
                        {date.toDateString()}
                    </p>
                </section>
                <br/><br/>
                <ButtonGroup variant="contained" color={"primary"} >
                    <Button onClick={() => navigate("/locations")} >Go back</Button>

                </ButtonGroup>
            </Box>
            : <p>Loading...</p>
        }


        </Container>
    )
}