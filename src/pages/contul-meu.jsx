import "../style/contul-meu.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import Navbar from "../components/navbar-customer";
import Logo from "../components/logo";
import Home from "../components/home";

export default function ContulMeu() {
    return (
        <div className="contul-meu-container">
            <Navbar />
            <div className="contul-meu-content">
                <div className="contul-meu-header">
                    <div className="contul-meu-welcome">
                        <p>Salut,</p>
                        <p>nume prenume</p>
                    </div>
                </div>
                <div className="contul-meu-info-container">
                    <div className="contul-meu-item contul-meu-name">
                        <div className="info-icon">
                            <BsFillPersonFill />
                            <div className="">Stefan Mesesan</div>
                        </div>
                        <BiPencil />
                    </div>
                    <div className="contul-meu-item contul-meu-email">
                        <MdEmail />
                        <p className="email">stefanmesesan123@gmail.com</p>
                    </div>
                    <div className="contul-meu-item contul-meu-address">
                        <div className="info-icon">
                            <MdLocationOn />
                            <p>str. toamnei nr 22</p>
                        </div>
                    </div>
                    <div className="contul-meu-item contul-meu-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <p>0748914666</p>
                        </div>
                    </div>
                    <div className="contul-meu-item contul-meu-change-password">
                        <div className="info-icon">
                            <AiFillLock />
                            <p>Schimba parola</p>
                        </div>
                    </div>
                    <div className="contul-meu-item contul-meu-comenzile-mele">
                        <div className="info-icon">
                            <FaHamburger />
                            <p>Comenzile mele</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
