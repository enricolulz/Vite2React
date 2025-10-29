import { AuthenticationData } from "../contexts/Authentication";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export function AuthenticationProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    function SignUp (username, email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const hasUser = users.find(u => u.username === username);
        if (hasUser) return { status: false, message: "Username already exists" };

        if (username.length > 14 || username.length < 6) return { status: false, message: "Invalid username length (min: 6 | max: 14)" };
        if (/\s/.test(username)) return { status: false, message: "Invalid username characters (no blank characters)"}
        if (/[!@#$%^&*(),.?":{}|<>]/.test(username)) return { status: false, message: "Invalid username characters (no special characters)"};
        if (!email.includes("@gmail.com")) return { status: false, message: "Invalid email address (...@gmail.com)" };
        if (password.length > 14 || password.length < 6) return { status: false, message: "Invalid password length (min: 6 | max: 14)" };

        const date = new Date();
        const format = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();

        users.push({ username, email, password, uuid: uuidv4(), joinedAt: format });
        localStorage.setItem("users", JSON.stringify(users));
        return { status: true, message: "Account has been created successfully" };
    }

    function Login (username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const validUser = users.find(u => u.username === username);
        if (!validUser) return { status: false, message: "Username doesn't exist" };
        if (validUser.password !== password) return { status: false, message: "Incorrect password" };

        setUser(validUser);
        localStorage.setItem("user", JSON.stringify(validUser));
        return { status: true, message: "You have successfully entered an account" };
    }

    function Logout () {
        setUser(null);
        localStorage.removeItem("user");
        return { status: true, message: "You have successfully logged out from an account" };
    }

    return (
        <AuthenticationData.Provider value={{ user, SignUp, Login, Logout }}>
            {children}
        </AuthenticationData.Provider>
    );
}

export default AuthenticationData