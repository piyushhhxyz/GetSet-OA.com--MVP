/* eslint-disable jsx-a11y/alt-text */
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../lotties/login.json';
import "../css/login.css";
import githubLogo from "../githubLoginImage.png";
// import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
export default function Login() {
    const google = () => {
        window.open("http://localhost:4000/auth/google", "_self");
    };
    const github = () => {
        window.open("http://localhost:4000/auth/github", "_self");
    };

    return (
        <>
            <div className="body">
                <nav className="login-nav">
                    <span className="logo-small">
                        <img
                            className="appLogo1"
                            src={"wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"}
                        />
                        <h1 className="name1">GetSet </h1>
                        <h1 className="nameGr1">OA.com</h1>
                    </span>
                </nav>
                <div className="loginTop">
                    <div className="loginWrapper">
                        <div className="Lcontainer">
                            <Player
                                src={animationData}
                                className="player-login"
                                loop
                                autoplay
                                speed={"2"}
                                style={{ height: "600px", width: "700px" }}
                            />
                            <div className="btnDiv">
                                <button
                                    className="googleBtn"
                                    onClick={google}
                                    >
                                    <img
                                        className="google-icon"
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                    />{" "}
                                    <Link to={"/home"} className="google-btn-text">
                                        Login with Google
                                    </Link>
                                </button>
                                <button className="gitBtn" onClick={github}>
                                    <img
                                        className="github-icon"
                                        src={githubLogo}
                                    />
                                    <Link
                                        to={"/home"}
                                        className="git-btn-text">
                                        Login with Github
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
