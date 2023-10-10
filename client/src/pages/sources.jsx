import React from "react";
import Navbar from "../components/Navbar";
import "../css/resources.css"

export default function Sources({ user }) {
  return (
    <div className="body2">
    <Navbar user={user} />
    <div className="resources-wrapper">
        <div className="resources-heading">
            <h1 className="inner-heading">Hold your Horses xoxo</h1>
        </div>
        <div className="coming-soon">
            <h1 className="inner-heading">...Coming Soon</h1>
        </div>
    </div>
</div>
  );
}
