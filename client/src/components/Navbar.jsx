import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar({ user }) {
    const navigate = useNavigate();
    const logout = () => {window.open("https://getsetoa-api.vercel.app/auth/logout", "_self")};
    
    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === "u" && event.metaKey && event.shiftKey) {
            navigate("/upload");
          }
        };
    
        document.addEventListener("keydown", handleKeyPress);
        return () => {
          document.removeEventListener("keydown", handleKeyPress);
        };
      }, [navigate]);

    const toggleMenu = () => {
        const menu = document.getElementById("menu-small");
        menu.classList.toggle("hidden");
    };

    return (
        <nav className="offcampus-navbar">
            <Link
                to={"/"}
                className="logo-small-offcampus">
                <img
                    className="appLogo navbar-applogo"
                    src="https://get-set-oa.vercel.app/wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
                    alt="App Logo"
                />
                <h1 className="logo-name name">GetSet</h1>
                <h1 className="logo-nameGr nameGr">OA.com</h1>
            </Link>
            {user && (
                <div
                    className="navlinkDiv"
                    id="navlinkDiv">
                    <NavLink
                        to={"/home"}
                        id="OA"
                        className="navBtn nav-first">
                        OA Question Pool
                    </NavLink>

                    <NavLink
                        to={"/offcampus"}
                        className="navBtn ">
                        Off-Campus Alerts
                    </NavLink>

                    <NavLink
                        to={"/resources"}
                        className="navBtn">
                        Exclusive Resources
                    </NavLink>

                    <NavLink
                        to={"/interview"}
                        className="navBtn lasst nav-last">
                        Interview Insights
                    </NavLink>
                </div>
            )}
            {user ? (
                <div className="user-info">
                    <ul className="list">
                        <li className="listItem avatar">
                            <img
                               src={user.photos[0].value}
                                alt=""
                                className={`avatar
                                `}
                                onClick={toggleMenu}
                            />
                            <ul
                                className="user-info-small hidden"
                                id="menu-small">
                                <li className="listItem-small username-small hidden show-small">
                                    {user.displayName}
                                </li>
                                <li className="listItem-small">
                                    <button
                                        onClick={logout}
                                        className="logout-button-small">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </li>
                        <li className="listItem username" onClick={toggleMenu}>
                            {user.displayName}
                        </li>
                    </ul>
                </div>
            ) : (
                <Link
                    className="listItem"
                    to="/auth">
                    Login
                </Link>
            )}
        </nav>
    );
}
