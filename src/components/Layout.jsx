import Interface from "./Interface";

export function Layout ({ children }) {
    return (
        <div className="container">
            <div className="background-top"></div>
            <div className="background-bottom"></div>
            <div className="parent">
                {children}
                <Interface />
            </div>
        </div>
    );
}

export default Layout