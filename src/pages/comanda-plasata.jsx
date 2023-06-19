import "../style/comanda-plasata.css";
import { BsCheckCircle } from "react-icons/bs";
import Navbar from "../components/navbar";

export default function ComandaPlasata() {
    return (
        <div>
            <Navbar />
            <div className="comanda-plasata-container">
                <BsCheckCircle className="check" />
                <h1>comanda a fost plasata</h1>
            </div>
        </div>
    );
}
