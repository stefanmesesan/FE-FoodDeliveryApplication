import "../style/navbar.css";
import CosulMeu from "./cosul-meu";
import ContulMeu from "./contul-meu";
import Logo from "./logo";
import SearchBar from "./search-bar";

export default function NavbarDelivery() {
    return (
        <div className="restaurant-list-nav-bar">
            <div className="restaurant-list-nav-bar-center">
                <div className="restaurant-list-nav-bar-left">
                    <Logo />
                </div>
                <div className="restaurant-list-nav-bar-right">
                    <a href={"/comenzileMele"}>
                        <button className="comenzi-btn">Comenzile mele</button>
                    </a>
                    <ContulMeu />
                </div>
            </div>
        </div>
    );
}
