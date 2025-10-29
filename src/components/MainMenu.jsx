import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainData } from "../contexts/MainMenu";

export function MainMenu() {
  const { button1, button2 } = useContext(MainData);
  return (
    <div className="dashboard-grid6">
        <Link className="grid2x3-button1" to={button1.link}>{button1.name}</Link>
        <Link className="grid2x3-button2" to={button2.link}>{button2.name}</Link>
    </div>
  );
}

export default MainMenu;
