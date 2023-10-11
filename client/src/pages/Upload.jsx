import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/upload1.css"

export default function Upload({ user }) {
  const myComponentStyle = {
    // background: "transparent",
    // border: "none",
  };

  let navigator = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (loginCredentials.username === "PARV SEHGAL" ||
        loginCredentials.username === "PARV") &&
      loginCredentials.password === "12345678"
    ) {
      setIsAuthenticated(true);
      alert("Welcome TO Uploading");
    } else {
      alert("YOU ARE NOT AUTHORIZED TO ENTER THIS PAGE<>");
    }
  };

 
  if (!isAuthenticated) {
    return (
      <div className="body-1">
      <div className="upload-form-container1">
        <h2 className="authMessage1">Just Say Hello !!!</h2>
        <p className="authM1">Join our team as a collaborator !!!</p>
        <form className="upload_auth-form1">
          <div className="authFlex1">
            <div className="user1">
              <input
                className="usernameInput1"
                type="text"
                name="username"
                placeholder="USERNAME"
                value={loginCredentials.username}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div className="password1">
              <input
                className="passInput1 usernameInput1"
                style={myComponentStyle}
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={loginCredentials.password}
                onChange={(e) =>
                  setLoginCredentials({
                    ...loginCredentials,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <button onClick={handleLogin} className="btn1 auth1">
            AUTHENTICATE
          </button>
        </form>
      </div>
      </div>
    );
  }

  return (
    <div className="uploadOptions">
            <div className="optionsWrapper grid-parent">
                <div
                    className="OAupload grid-item"
                    onClick={() => {
                        navigator("/upload/OA");
                    }}>
                    <img
                        className="uploadGif"
                        src="https://i.pinimg.com/originals/9e/6a/03/9e6a03296e60add71104e77575babb31.gif"
                        alt=""
                    />
                    <h2 className="cardTitle">ONLINE ASSESSMENT</h2>
                </div>
                <div
                    className="offUpload grid-item"
                    onClick={() => {
                        navigator("/upload/offcampus");
                    }}>
                    <img
                        className="uploadGif"
                        src="https://i.pinimg.com/originals/ac/6d/c4/ac6dc4fe1925ca65a92fb0bc88cfe6ba.gif"
                        alt=""
                    />
                    <h3 className="cardTitleoff">OFFCAMPUS ALERTS</h3>
                </div>
                <div
                    className="resUpload grid-item"
                    onClick={() => {
                        navigator("/upload/resources");
                    }}>
                    <img
                        className="uploadGif"
                        src="https://i.gifer.com/TvTG.gif"
                        alt=""
                    />
                    <h3 className="cardTitleres">TECH RESOURCES </h3>
                </div>
                <div className="grid-item upload-now">
                    <div className="signUpload">
                        <p className="signup">UPLOAD NOW</p>
                    </div>
                </div>
            </div>
        </div>
  );
}
