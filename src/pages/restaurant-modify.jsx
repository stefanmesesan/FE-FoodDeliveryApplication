const RestaurantModify = () => {
    return <h1>Restaurant modify</h1>;
};

import "../style/contul-meu.css";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import CosulMeu from "../components/cosul-meu";
import Logo from "../components/logo";
import Home from "../components/home";

export default function RestaurantModify() {
    return (
        <div className="restaurant-create-container">
            <div className="restaurant-create-navbar">
                <Logo />
                <Home />
                <CosulMeu />
            </div>
            <div className="restaurant-create-content">
                <div className="restaurant-create-info-container">
                    <div className="restaurant-create-item restaurant-create-name">
                        <div className="info-icon">
                            <BsFillPersonFill />
                            <div className="">Restaurant X</div>
                        </div>
                        <BiPencil />
                    </div>
                    <div className="restaurant-create-item restaurant-create-address">
                        <div className="info-icon">
                            <MdLocationOn />
                            <p>str. toamnei nr 22</p>
                        </div>
                        <BiPencil />
                    </div>
                    <div className="restaurant-create-item restaurant-create-phone-number">
                        <div className="info-icon">
                            <AiTwotonePhone />
                            <p>0748914666</p>
                        </div>
                        <BiPencil />
                    </div>
                </div>
            </div>
        </div>
    );
}
