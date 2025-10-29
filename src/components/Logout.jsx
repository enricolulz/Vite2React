import { useContext } from "react"
import { AuthenticationData } from "../contexts/Authentication"
import { Navigate, useNavigate } from "react-router-dom";

export function Logout () {
    const { user, Logout } = useContext(AuthenticationData);
    const goto = useNavigate();

    if (user) Logout();
    goto("/login");
    return user ? <Navigate to="/" /> : <Navigate to="/login" />;
}

export default Logout