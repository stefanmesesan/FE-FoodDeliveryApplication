import NavbarOperator from "../components/navbar-operator";
import "../style/comenzile-mele.css";

export default function ComenziOperator() {
    return (
        <div className="comenzile-mele-container">
            <NavbarOperator />
            <div className="comenzile-mele-content">
                <h2>Comenzi for operator</h2>
                <div className="comenzi-wrapper">
                    <div className="comanda-card">
                        <p>ID</p>
                        <p>Restaurant</p>
                        <p>Pret</p>
                        <p>Status</p>
                    </div>
                    <div className="comanda-btn">
                        <button>Accepta comanda</button>
                    </div>
                </div>
                <div className="comenzi-wrapper">
                    <div className="comanda-card">
                        <p>ID</p>
                        <p>Restaurant</p>
                        <p>Pret</p>
                        <p>Status</p>
                    </div>
                    <div className="comanda-btn">
                        <button>Accepta comanda</button>
                    </div>
                </div>
                <div className="comenzi-wrapper">
                    <div className="comanda-card">
                        <p>ID</p>
                        <p>Restaurant</p>
                        <p>Pret</p>
                        <p>Status</p>
                    </div>
                    <div className="comanda-btn">
                        <button>Accepta comanda</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
