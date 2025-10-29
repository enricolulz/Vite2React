import { useEffect, useContext, useState } from "react";
import { MenuValues } from "../contexts/Menu";
import Menu from "./Menu";
import { AuthenticationData } from "../contexts/Authentication";
import { useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu";
import { MainData } from "../contexts/MainMenu";

export function Regulations () {
    const { setMenu } = useContext(MenuValues);
    const { setMainMenu } = useContext(MainData)
    const { user } = useContext(AuthenticationData);
    const [regulation, setRegulation] = useState(0);
    const goto = useNavigate();

    if (!user) {
        goto("/login");
    }

    useEffect(() => {
        setMenu({
        button1: { name: "HOME", link: "/" },
        button2: { name: "SETTINGS", link: "/settings" },
        button3: { name: "LOGOUT", link: "/logout" },
        });

        setMainMenu({
        button1: { name: "HOME", link: "/" },
        button2: { name: "Settings", link: "/settings" },
        });
    }, [setMenu, setMainMenu]);

    const menus = [
        { 
            id: 0, 
            name: "Preservation of the Community",
            message: "A member must not harm the server or, through inaction, allow it to be harmed. This includes sabotage, spamming, raids, or any action that threatens the integrity or reputation of the community."
        },
        { 
            id: 1, 
            name: "Respect and Conduct",
            message: "A member must treat every individual with respect, regardless of background or belief. Harassment, hate speech, threats, or personal attacks are strictly prohibited. Respectful disagreement is welcome; hostility is not."
        },
        { 
            id: 2, 
            name: "Order and Relevance",
            message: "A member must follow each channel's purpose, posted rules, and moderator instructions. Stay on topic, avoid excessive spam, and use appropriate channels for your content."
        },
        { 
            id: 3, 
            name: "Content Responsibility",
            message: "A member must not share or promote illegal, NSFW, or malicious material. This includes piracy, explicit content, scams, or harmful links. Keep discussions safe for all audiences unless otherwise specified by staff."
        }
    ];

    return (
        <>
            <div className="div1">
                <div className="container-box"></div>
                <div className="container-box-bottom"></div>
        
                <div className="div1-content">
                      
                    <div className="dashboard">
                        <div className="dashboard-grid1">
        
                            <div className="header-title">RULES</div>
                            <div className="header-line"></div>
        
                        </div>
                        <div className="dashboard-grid2x3">
        
                            <div className="grid2x3-box-title">{menus[regulation].name}</div>
                            <div className="grid2x3-box">{menus[regulation].message}</div>
        
                        </div>
                        <div className="dashboard-grid4"></div>
                        <div className="dashboard-grid5">

                            <div className="grid5-box-title">REGULATIONS</div>
                            <div className="grid5-box">
                                { menus.map(({ id, name }) => <button className="grid5-menu" onClick={() => setRegulation(id)}>{name}</button>) }
                            </div>

                        </div>
                        <MainMenu />
                    </div>
              
                </div>
            </div>
            <Menu />
        </>
    )
}

export default Regulations