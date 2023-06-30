import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

export default function CosulMeu() {
    return (
        <div className="nav-bar-user-profile">
            <IoCartOutline />
            <Link className="user-account-btn" to="/cos">
                Cos
            </Link>
        </div>
    );
}
