import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const intitalQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(intitalQuery);

    const handleSearch = () => {
        navigate("/restaurants/search?q=" + query);
    };

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="nav-bar-input">
            <input
                className="restaurant-list-search"
                type="text"
                placeholder="Cauta in restaurante"
                value={query}
                onChange={(event) => setQuery(event.currentTarget.value)}
                onKeyDown={handleKeyDown}
            />
            <BsSearch className="nav-bar-icon" onClick={handleSearch} />
        </div>
    );
}
