// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// export default function Navbar({ user }) {
//   const logout = () => {
//     window.open("http://localhost:4000/auth/logout", "_self");
//   };
//   let navigator = useNavigate();

//   return (
//     <div className="inline">
//       <Link to={"/"} className="inline">
//         <img
//           className="appLogoHome"
//           src="https://get-set-oa.vercel.app/wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"
//           alt="App Logo"
//         />
//         <h1 className="name">GetSet</h1>
//         <h1 className="nameGr">OA.com</h1>
//       </Link>
//       {user ? (
//         <div className="user-info">
//           <ul className="list">
//             <div className="navlinkDiv">
//               <NavLink to={"/home"} className="navBtn">
//                 OA Question Pool
//               </NavLink>
//               <NavLink to={"/offcampus"} className="navBtn">
//                 Off-Campus Alerts
//               </NavLink>
//               <NavLink to={"/resources"} className="navBtn">
//                 Exclusive Resources
//               </NavLink>
//               <NavLink to={"/interview"} className="navBtn lasst">
//                 Interview Insights
//               </NavLink>
//             </div>
//             <li className="listItem">
//               <img src={user.photos[0].value} alt="" className="avatar" />
//             </li>
//             <li className="listItem">{user.displayName}</li>
//             <li className="listItem">
//               <button onClick={logout} className="logout-button">
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <Link className="listItem" to="/auth">
//           Login
//         </Link>
//       )}
//     </div>
//   );
// }


// NOTE: ignore the backend function.
// the data coming from the user..instead of user.image and name / use your name and Profile Avatar.

import { Link, NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";
// import defaultAvatar from "../../public/piyush.jpg";
export default function Navbar({ user }) {
    const logout = () => {
        window.open("http://localhost:4000/auth/logout", "_self");
    };
    let navigator = useNavigate();
    
    const toggleMenu = () => {
        const menu = document.getElementById("menu-small");
        menu.classList.toggle("hidden");
    };
    console.log(user.photos[0].value);
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
