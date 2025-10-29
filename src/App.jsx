import "./index.css";
import Login from "./components/Login";
import Moonlight from "./components/Moonlight";
import Layout from "./components/Layout";
import MenuProvider from "./providers/Menu";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import { AuthenticationProvider } from "./providers/Authentication";
import Home from "./components/Home";
import Logout from "./components/Logout";
import MainMenuProvider from "./providers/MainMenu";
import Regulations from "./components/Regulations";

export function App() {

  return (
    <AuthenticationProvider>
      <MenuProvider>
        <MainMenuProvider>
          <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/regulations" element={<Regulations />} />
              </Routes>
              <Moonlight />
          </Layout> 
        </MainMenuProvider>   
      </MenuProvider>
    </AuthenticationProvider>
  );
}

export default App