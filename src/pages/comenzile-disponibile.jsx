import NavbarDelivery from "../components/navbar-delivery";
import "../style/comenzile-mele.css";

export default function ComenzileMele() {
    return (
        <div className="comenzile-mele-container">
            <NavbarDelivery />
            <div className="comenzile-mele-content">
                <h2>Comenzile disponibile</h2>
                <div className="comenzi-disponibile-wrap">
                    <div className="comanda-card">
                        <p>ID</p>
                        <p>Restaurant</p>
                        <p>Pret</p>
                        <p>Status</p>
                    </div>
                    <div className="comanda-btn">
                        <button>Preia comanda</button>
                        <button>Comanda livrata</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
