import { IoCartOutline } from "react-icons/io5";

export default function CosulMeu() {
    return (
        <div className="nav-bar-user-profile">
            <IoCartOutline />
            <a className="user-account-btn" href="/cos">
                <p>Cos</p>
            </a>
        </div>
    );
}
