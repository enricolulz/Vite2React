import { useEffect, useContext } from "react";
import { MenuValues } from "../contexts/Menu";
import Menu from "./Menu";
import { AuthenticationData } from "../contexts/Authentication";
import { useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu";
import { MainData } from "../contexts/MainMenu";

export function Home () {
  const { setMenu } = useContext(MenuValues);
  const { setMainMenu } = useContext(MainData)
  const { user } = useContext(AuthenticationData);
  const goto = useNavigate();

  if (!user) {
    goto("/login");
  }

  useEffect(() => {
    setMenu({
      button1: { name: "REGULATIONS", link: "/regulations" },
      button2: { name: "SETTINGS", link: "/settings" },
      button3: { name: "LOGOUT", link: "/logout" },
    });

    setMainMenu({
      button1: { name: "REGULATIONS", link: "/regulations" },
      button2: { name: "Settings", link: "/settings" },
    });
  }, [setMenu, setMainMenu]);

  return (
        <>
          <div className="div1">
            <div className="container-box"></div>
            <div className="container-box-bottom"></div>

            <div className="div1-content">
              
              <div className="dashboard">
                  <div className="dashboard-grid1">

                    <div className="header-title">HOME</div>
                    <div className="header-line"></div>

                  </div>
                  <div className="dashboard-grid2x3">

                    <div className="grid2x3-box-title">ABOUT</div>
                    <div className="grid2x3-box">Good Day! I'm <span className="ve-t">@vhoxo</span>, the current owner of <span className="ve-t">Moonlight Guild</span>. The <span className="ve-t">Moonlight Official Website</span> is a platform where you can customize your experience in our <span className="ve-t">Discord Server</span> to your liking, including roles, nicknames, threads, reports, games, and more. You can modify or install these features privately within our application.</div>

                  </div>
                  <div className="dashboard-grid4"></div>
                  <div className="dashboard-grid5"></div>
                  <MainMenu />
              </div>
      
            </div>
          </div>
          <Menu />
        </>
    );
}

export default Home