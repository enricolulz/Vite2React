import { useEffect, useContext, useState } from "react";
import { MenuValues } from "../contexts/Menu";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import wait from "./Wait";
import { AuthenticationData } from "../contexts/Authentication";

export function Login () {
  const { setMenu } = useContext(MenuValues);
  const { user, Login } = useContext(AuthenticationData);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: 1, m: ""});
  const goto = useNavigate();;

  if (user) {
    goto("/");
  }

  async function ValidateAccount(e) {
    e.preventDefault();
    const { status, message } = Login(username, password);
    if (status) {
      setMessage({ type: 2, m: message });
      await wait(500);
      goto("/");
    } else {
      setMessage({ type: 1, m: message });
    }
  }

  useEffect(() => {
    setMenu({
      button1: { name: "HOME", link: "/" },
      button2: { name: "SETTINGS", link: "/settings" },
      button3: { name: "SIGNUP", link: "/signup" },
    })
  }, [setMenu]);

  return (
        <>
          <div className="div1">
            <div className="container-box"></div>
            <div className="container-box-bottom"></div>

            <div className="div1-content">
              
              <div className="login-form">
                  <div className="login-header">

                    <div className="header-title">LOGIN</div>
                    <div className="header-line"></div>

                  </div>
                  <div className="login-username">

                    <div className="login-title">USERNAME</div>
                    <div className="login-box">
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                  </div>
                  <div className="login-password">

                    <div className="login-title">PASSWORD</div>
                    <div className="login-box">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className={(message.type == 1 ? "error" : "success") +" login-title"}>{message.m}</div>
                  </div>
                  <button className="login-submit" onClick={(e) => ValidateAccount(e)}>Login</button>
                  <Link className="signup" to="/signup">CREATE AN ACCOUNT</Link>
                  <div className="div6"></div>
              </div>
      
            </div>
          </div>
          <Menu />
        </>
    );
}

export default Login