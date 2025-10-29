import { createContext } from "react";
export const MainData = createContext({
    button1: { name: "REGULATIONS", link: "/regulations" },
    button2: { name: "Settings", link: "/settings" },
    setMainMenu: () => {}
});