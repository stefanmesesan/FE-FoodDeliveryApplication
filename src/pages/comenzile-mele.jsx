import Navbar from "../components/navbar";
import "../style/comenzile-mele.css";

export default function ComenzileMele() {
    return (
        <div className="comenzile-mele-container">
            <Navbar />
            <div className="comenzile-mele-content">
                <h2>Comenzile mele</h2>
                <div className="comenzi-wrapper">
                    <div className="comanda-card">
                        <p>ID</p>
                        <p>Restaurant</p>
                        <p>Pret</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className="comenzi-wrapper">
                    <div className="comanda-card">
                        <p>ID</p>
                        <p>Restaurant</p>
                        <p>Pret</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className="comenzi-wrapper">
                    <div className="comanda-card">
                        <p>ID</p>
                        <p>Restaurant</p>
                        <p>Pret</p>
                        <p>Status</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
