import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as accountClient from "../clients/account";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields");
            return;
        }

        accountClient
            .login({
                email,
                password,
            })
            .then((response) => {
                localStorage.setItem("accessToken", response.data.access_token);
                localStorage.setItem("role", response.data.role);
                const role = localStorage.getItem("role");
                if (role === "CUSTOMER") navigate("/restaurants");
                else if (role === "ADMIN") navigate("/restaurants/admin");
                else if (role === "RESTAURANT_OPERATOR")
                    navigate("/restaurants/myRestaurant");
                else if (role === "DELIVERY_GUY")
                    navigate("/comenzileDisponibile");
                else navigate("/restaurants");
            });
    };
    return (
        <div className="user-register-container">
            <div className="user-register-form">
                <p className="register-role">Login</p>
                <form onSubmit={handleLogin}>
                    <div className="user-register-inputs">
                        <div>
                            <p>email</p>
                            <input
                                type="email"
                                placeholder="ex: andreipopescu@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>password</p>
                            <input
                                type="password"
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <a href="/register"> Nu ai cont? Inregistreaza-te </a>
                        </div>
                        <div className="role-select role-select-register">
                            <button onClick={handleLogin} type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
