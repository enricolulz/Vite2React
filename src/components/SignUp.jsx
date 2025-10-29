import { useEffect, useContext, useState } from "react";
import { MenuValues } from "../contexts/Menu";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationData } from "../contexts/Authentication";
import wait from "./Wait";

export function SignUp () {
  const { setMenu } = useContext(MenuValues);
  const { user, SignUp } = useContext(AuthenticationData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: 1, m: "" });
  const goto = useNavigate();

  if (user) {
    goto("/");
  }

  useEffect(() => {
    setMenu({
      button1: { name: "HOME", link: "/" },
      button2: { name: "SETTINGS", link: "/settings" },
      button3: { name: "LOGIN", link: "/login" },
    })
  }, [setMenu]);

  async function CreateAccount (e) {
    e.preventDefault();
    const { status, message } = SignUp(username, email, password);
    if (status) {
      setMessage({ type: 2, m: message });
      await wait(500);
      goto("/login");
    } else {
      setMessage({ type: 1, m: message });
    }
  }

  return (
        <>
          <div className="div1">
            <div className="container-box"></div>
            <div className="container-box-bottom"></div>

            <div className="div1-content">
              
              <div className="login-form">
                  <div className="login-header">

                    <div className="header-title">SIGNUP</div>
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
                  <div className="signup-email">

                    <div className="login-title">EMAIL</div>
                    <div className="login-box">
                      <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                  </div>
                  <div className="signup-password">

                    <div className="login-title">PASSWORD</div>
                    <div className="login-box">
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className={(message.type == 1 ? "error" : "success") + " login-title"}>{message.m}</div>
                  </div>
                  <button className="signup-submit" onClick={(e) => CreateAccount(e)}>Create</button>
                  <Link className="login" to="/login">LOGIN</Link>
              </div>
      
            </div>
          </div>
          <Menu />
        </>
    );
}

export default SignUp