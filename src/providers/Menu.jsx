import { MenuValues } from "../contexts/Menu";
import { useState } from "react";

export function MenuProvider ({ children }) {
    const [menu, setMenu] = useState({
        button1: { name: "HOME", link: "/" },
        button2: { name: "SETTINGS", link: "/settings" },
        button3: { name: "LOGIN", link: "/login" },
    });

    return (
        <MenuValues.Provider value={{ ...menu, setMenu }}>
            {children}
        </MenuValues.Provider>
    );
}

export default MenuProvider