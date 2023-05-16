import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields");
            return;
        }
        navigate("/");
    };
    return (
        <div className="user-register-container">
            <div className="user-register-form">
                <p className="register-role">Login</p>
                <form onSubmit={handleSubmit}>
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
                        <div className="role-select role-select-register">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
