import { Link, Outlet, useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";
import "../css/landing.css";
// import logo from "../assets/logo.webp";
import animationData from "../lotties/3R2RxWOWux.json";


function Landing() {
    let navigator = useNavigate();
    const words = [
        "Google Questions.",
        "Microsoft Questions.",
        "Atlassian Questions.",
        "Sprinklr Questions.",
        "Every Goddam OA...",
    ];

    var [text] = useTypewriter({
        words,
        loop: {},
        typeSpeed: 20,
        delaySpeed: 50,
    });

    return (
        <>
            <nav className="landing-navbar">
                <span className="logo-small">
                    <img
                        className="appLogo"
                        src={"wepik-gradient-developers-pink-coding-logo-20230823145648gBI8.png"}
                    />
                    <h1 className="name">GetSet </h1>
                    <h1 className="nameGr">OA.com</h1>
                </span>

                <button
                    className="registerBtn"
                    onClick={() => navigator("/auth")}>
                    REGISTER
                </button>
            </nav>
            <div className="wrapper">
                <div className="blackDiv">
                    <div className="inlineLanding"></div>
                    <div className="all-text-wrapper">
                        <div className="inline-text typeWriter" id="typewriter1">
                            <span className="small getText">Get</span>{" "}
                            <span className="typeWriterH2 big">{text}</span>
                            <span className="typeWriterCursor big">
                                <Cursor />
                            </span>
                        </div>

                        <div className="inline-text top">
                            <p className="big">Pooling All </p>
                        </div>

                        <div className="inline-text">
                            <p className="big ques"> OA Questions</p>
                            <span className="small from" id="from1">from</span>
                        </div>

                        <div className="inline-text">
                            <span className="small from" id="from2">from</span>
                            <span className="big tier">TIER-1 Colleges</span>
                        </div>

                        <div className="inline-text">
                            <p className="small across"> across</p>
                            <p className="big india">India</p>
                        </div>
                        <button
                            className="startBtn"
                            onClick={() => navigator("/auth")}>
                            Start Solving
                        </button>
                    </div>
                </div>

                <div className="purpleDiv">
                <div className="typeWriter" id="typewriter2">
                            <span className="small getText">Get,</span>{" "}
                            <span className="typeWriterH2 big">{text}</span>
                            <span className="typeWriterCursor big">
                                <Cursor />
                            </span>
                        </div>
                    <Player
                        src={animationData}
                        className="landing-player"
                        loop
                        autoplay
                        speed={"2"}
                        style={{ height: "700px", width: "700px" }}
                    />
                </div>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default Landing;
