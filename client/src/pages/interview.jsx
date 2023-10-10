import React from "react";
import Navbar from "../components/Navbar";
import "../css/resources.css";
import { useNavigate } from "react-router-dom";

export default function Interview({ user }) {
    let ct =0;
    const navigate = useNavigate();
    const toUpload= (e) => {
        ct++;
        if (ct === 2) {
            ct=0
            navigate('/upload');
          }
    }
  return (
    <div className="body2">
    <Navbar user={user} />
    <div className="resources-wrapper">
        <div className="resources-heading">
            <h1 className="inner-heading">
                Keep Showering Us With Your Love And Support xoxo
            </h1>
        </div>
        <div className="coming-soon" onClick={toUpload}>
            <h1 className="inner-heading">...Coming Soon</h1>
        </div>
    </div>
</div>
  );
}
