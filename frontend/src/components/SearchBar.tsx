import React, {ChangeEvent} from "react";

export type SearchProps = {
    searchQuery(searchText: string): void
}

export default function Search(props: SearchProps){

    function handleSearchByCity(event: ChangeEvent<HTMLInputElement>){
        props.searchQuery(event.target.value)
    }

    return(
        <section>
            <input onChange={handleSearchByCity}/>
            <button>Search</button>
        </section>
    )
}