import { useState } from "react";
import "../style/register.css";
import RegisterRoleSelect from "./register-role-select";

export default function Register() {
    const [role, setRole] = useState(null);
    return (
        <div>
            <div>
                <RegisterRoleSelect role={role} setRole={setRole} />
            </div>
        </div>
    );
}
