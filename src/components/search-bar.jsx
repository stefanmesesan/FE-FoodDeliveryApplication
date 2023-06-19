import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    return (
        <div className="nav-bar-input">
            <input
                className="restaurant-list-search"
                type="text"
                placeholder="Cauta in restaurante"
            />
            <BsSearch className="nav-bar-icon" />
        </div>
    );
}
