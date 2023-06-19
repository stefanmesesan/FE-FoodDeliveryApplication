import "../style/comanda-plasata.css";
import Navbar from "../components/navbar";

export default function CerereStergereRestaurant() {
    return (
        <div>
            <Navbar />
            <div className="trimite-cerere-container">
                <button>Trimite Cerere</button>
            </div>
        </div>
    );
}