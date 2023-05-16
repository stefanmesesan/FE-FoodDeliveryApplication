import { BsSearch, BsPerson } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { IoCartOutline, IoAdd } from "react-icons/io5";
import "../style/navbar.css";

export default function Navbar() {
    return (
        <div className="restaurant-list-nav-bar">
            <div className="restaurant-list-nav-bar-center">
                <div className="restaurant-list-nav-bar-left">
                    <div>
                        <a href={`/restaurants`}>
                            <h1 className="nav-bar-logo">FUUD|EP</h1>
                        </a>
                    </div>
                    <div className="nav-bar-input">
                        {/* <SlLocationPin onClick={}/> */}
                        <SlLocationPin />
                        <input
                            className="restaurant-address-input"
                            type="text"
                            placeholder="Adauga adresa ta"
                        />
                        <IoAdd className="nav-bar-icon" />
                    </div>
                    <div className="nav-bar-input">
                        <input
                            className="restaurant-list-search"
                            type="text"
                            placeholder="Cauta in restaurante"
                        />
                        <BsSearch className="nav-bar-icon" />
                    </div>
                </div>
                <div className="restaurant-list-nav-bar-right">
                    <div className="nav-bar-user-profile">
                        <BsPerson />
                        <p>Contul meu</p>
                    </div>
                    <div className="nav-bar-user-profile">
                        <IoCartOutline />
                        <p>Cos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
