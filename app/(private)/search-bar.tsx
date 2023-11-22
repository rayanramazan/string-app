import * as _ from "lodash";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import User from "../components/user";

export default function SearchBar() {

    const [searchResults, setSearchResults] = useState([]);
    const [visible, setVisible] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // @ts-ignore
            if(ref.current && !ref.current.contains(e.target)) {
                setVisible(false);
            }
            console.log(e.target);
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    })

    const debouncedFetchSearchResults = _.debounce(fetchSearchResults, 500);

    async function fetchSearchResults(searchText: string) {
        const res = await fetch("/api/search?q=" + searchText);
        if(res.ok) {
            const json = await res.json();
            console.log(json);
            setVisible(true);
            setSearchResults(json.data);
        } else {
            setSearchResults([]);
            setVisible(false);
        }
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
        debouncedFetchSearchResults(e.target.value);
    }

    function handleClick(e: React.MouseEvent<HTMLInputElement>) {
        setVisible(true);
    }

    return (
        <div className="relative" ref={ref}>
            <input 
                type="text"
                onChange={handleChange}
                onClick={handleClick}
                className="p-2 rounded-lg bg-gray-700 my-2 w-full"
                placeholder="Search for a user..."
            />
            {visible && searchResults.length > 0 && (
                <ul className="bg-slate-500 p-2 rounded-lg absolute w-full">
                    {searchResults.map((res: UserI) => {
                        return (
                            <li 
                                key={res.id} 
                                className="my-2"
                                onClick={() => setVisible(false)}
                            >
                                <User user={res} />
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}