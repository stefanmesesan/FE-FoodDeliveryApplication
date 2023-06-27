import "../style/navbar.css";
import Logo from "./logo";
import { IoRestaurantSharp } from "react-icons/io5";

export default function NavbarOperator() {
    return (
        <div className="restaurant-list-nav-bar">
            <div className="restaurant-list-nav-bar-center">
                <div className="restaurant-list-nav-bar-left">
                    <Logo />
                </div>
                <div className="restaurant-list-nav-bar-right">
                    <a href={"/comenzileMele"}>
                        <button className="comenzi-btn">Comenzi</button>
                    </a>
                    <div className="nav-bar-user-profile">
                        <IoRestaurantSharp />
                        <a className="user-account-btn" href="/">
                            <p>Restaurantul meu</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
