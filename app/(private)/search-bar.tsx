import { ChangeEvent, useState } from "react";

export default function SearchBar() {

    const [searchResults, setSearchResults] = useState([]);

    async function fetchSearchResults(searchText: string) {
        const res = await fetch("/api/search?q=" + searchText);
        if(res.ok) {
            const json = await res.json();
            console.log(json);
            setSearchResults(json.data);
        }
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        fetchSearchResults(e.target.value);
    }
    return (
        <div>
            <input 
                type="text"
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-700 my-2 w-full"
                placeholder="Search for a user..."
                />
        </div>
    )
}