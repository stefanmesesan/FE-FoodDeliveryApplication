import "../style/navbar.css";
import Logo from "./logo";
import { IoRestaurantSharp } from "react-icons/io5";

export default function NavbarAdmin() {
    return (
        <div className="restaurant-list-nav-bar">
            <div className="restaurant-list-nav-bar-center">
                <div className="restaurant-list-nav-bar-left">
                    <Logo />
                </div>
                <div className="restaurant-list-nav-bar-right">
                    <a href={"/orders"}>
                        <button className="comenzi-btn">Comenzi</button>
                    </a>
                    <a href={"/accounts"}>
                        <button className="comenzi-btn">Conturi</button>
                    </a>
                    <a href={"/restaurants"}>
                        <button className="comenzi-btn">Restaurants</button>
                    </a>
                </div>
            </div>
        </div>
    );
}
