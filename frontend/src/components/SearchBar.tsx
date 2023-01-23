
import {Typography, Input, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {ChangeEvent} from "react";


type SearchBarProps = {
    searchCityFunction(searchCity: string): void

}

export default function SearchBar(props: SearchBarProps){

    function handleOnChangeSearchText(event: ChangeEvent<HTMLInputElement>){
        props.searchCityFunction(event.target.value)
    }


    return (
        <section className={"search-element"}>
            <Typography
                variant={"h6"} className={"title"}>Geben Sie die gesuchte Stadt ein:
            </Typography>

            <Input startAdornment={
                <InputAdornment position="start"><SearchIcon/></InputAdornment>} onChange={handleOnChangeSearchText}/>



        </section>

    )


}