import "../style/contul-meu.css";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import * as userClient from '../clients/users'
import Navbar from "../components/navbar-customer";
import Logo from "../components/logo";
import Home from "../components/home";

export default function ContulMeu() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        userClient.getCurrent().then(response => {
            setUser(response.data)
        })
    }, [])

    return (
        <div className="contul-meu-container">
            <Navbar />
            <div className="contul-meu-content">
                <div className="contul-meu-header">
                    <div className="contul-meu-welcome">
                        <p>Salut,</p>
                        <p>{user?.firstName} {user?.lastName}</p>
                    </div>
                </div>
                <div className="contul-meu-info-container">
                    <div className="contul-meu-item contul-meu-name">
                        <div className="info-icon">
                            <BsFillPersonFill />
                            <div className="">{user?.firstName} {user?.lastName}</div>
                        </div>
                        <Link to="/contulMeu/update">
                            <BiPencil />
                        </Link>
                    </div>
                    <div className="contul-meu-item contul-meu-email">
                        <MdEmail />
                        <p className="email">{user?.email}</p>
                    </div>
                    <div className="contul-meu-item contul-meu-address">
                        <div className="info-icon">
                            <MdLocationOn />
                            <p>{user?.address}</p>
                        </div>
                    </div>
                    <div className="contul-meu-item contul-meu-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <p>{user?.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
