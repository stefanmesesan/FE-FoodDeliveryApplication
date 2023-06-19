import { BsPerson } from "react-icons/bs";

export default function ContulMeu() {
    return (
        <div className="nav-bar-user-profile">
            <BsPerson />
            <a className="user-account-btn" href="/contulMeu">
                <p>Contul meu</p>
            </a>
        </div>
    );
}
