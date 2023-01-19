
import {Button, FormControl, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
    searchCityFunction(): void
    handleSearch(): void
}

export default function SearchBar(props: SearchBarProps){




    return (
        <section className={"search-element"}>
            <Typography
                variant={"h6"} className={"title"}>Geben Sie die gesuchte Stadt ein:
            </Typography>
            <FormControl variant="standard">
                <input onChange={props.searchCityFunction}/>
            </FormControl>
            <SearchIcon/>
            <Button onClick={props.handleSearch} variant="contained" color={"primary"}>Suchen</Button>
        </section>

    )


}