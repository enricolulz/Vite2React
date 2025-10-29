import { MainData } from "../contexts/MainMenu";
import { useState } from "react";

export function MainMenuProvider ({ children }) {
    const [mainMenu, setMainMenu] = useState({
        button1: { name: "REGULATIONS", link: "/regulations" },
        button2: { name: "Settings", link: "/settings" }
    });

    return (
        <MainData.Provider value={{ ...mainMenu, setMainMenu }}>
            {children}
        </MainData.Provider>
    );
}

export default MainMenuProvider