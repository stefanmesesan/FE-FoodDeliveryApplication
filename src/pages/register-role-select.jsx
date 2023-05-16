import "../style/register.css";
import { useNavigate } from "react-router-dom";

export default function RegisterRoleSelect({ role, setRole }) {
    const handleRoleSelectClick = (event) => {
        setRole(event.target.value);
    };
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (role === null) {
            alert("Please select an option");
        } else {
            if (role === "0") {
                navigate("/register/customer");
            } else if (role === "1") {
                navigate("/register/deliveryGuy");
            } else if (role === "2") {
                navigate("/register/restaurantOperator");
            }
        }
    };

    return (
        <div className="register-role-container">
            <div className="register-role-form">
                <p className="register-role">Select your role</p>
                <form>
                    <label>
                        <div className="register-select-container">
                            <div className="register-select">
                                <input
                                    type="radio"
                                    name="select-role"
                                    value={0}
                                    onChange={handleRoleSelectClick}
                                />
                                <p>Customer</p>
                            </div>
                            <div className="register-select">
                                <input
                                    type="radio"
                                    name="select-role"
                                    value={1}
                                    onChange={handleRoleSelectClick}
                                />
                                <p>Delivery Guy</p>
                            </div>
                            <div className="register-select">
                                <input
                                    type="radio"
                                    name="select-role"
                                    value={2}
                                    onChange={handleRoleSelectClick}
                                />
                                <p>Restaurant Operator</p>
                            </div>
                        </div>
                    </label>
                </form>
                <div className="role-select special">
                    <button onClick={handleSubmit} type="submit">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
