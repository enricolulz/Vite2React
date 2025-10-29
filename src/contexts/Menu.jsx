import { createContext } from "react";

export const MenuValues = createContext({
    button1: { name: "HOME", link: "/" },
    button2: { name: "SETTINGS", link: "/settings" },
    button3: { name: "Login", link: "/login" },
    setMenu: () => {}
})