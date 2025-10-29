import { Link } from "react-router-dom";
import { useContext } from "react";
import { MenuValues } from "../contexts/Menu";

export function Menu() {
  const { button1, button2, button3 } = useContext(MenuValues);

  return (
    <div className="div3">
      <div className="buttons">
        <Link className="invite" to="#">Invite</Link>
        <Link className="discord" to="#">
          <img src="/Discord.png" alt="" className="discord-logo" />
          Discord
        </Link>
        <Link className="button1" to={button1.link}>{button1.name}</Link>
        <Link className="button2" to={button2.link}>{button2.name}</Link>
        <Link className="button3" to={button3.link}>{button3.name}</Link>
      </div>
    </div>
  );
}

export default Menu;
