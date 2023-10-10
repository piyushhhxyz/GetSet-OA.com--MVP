import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import "../css/company.css"

export default function CompanyDetails({ user }) {
  const { companyName } = useParams();
  const [companyDetails, setCompanyDetails] = useState([]);
  const [activeBox, setActiveBox] = useState(null);

  useEffect(() => {
    fetchCompanyDetails();
  }, [companyName]);

  const fetchCompanyDetails = async () => {
    try {
      const response = await axios.get(
        `https://getsetoa-api.vercel.app/api/v1/getData/${companyName}`
      );
      console.log(response);
      setCompanyDetails(response.data);
    } catch (error) {
      console.error("Error fetching company details:", error);
    }
  };

  const toggleDriveLink = (index) => {
    if (activeBox === index) {
      setActiveBox(null);
    } else {
      setActiveBox(index);
    }
  };

  const openDriveLink = (driveLink) => {
    window.open(driveLink, "_blank");
  };

  return (
    <div className="body-company">
      <Navbar user={user} />
      {!companyDetails.length ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="main-company-page-container">
          <div>
            <h2 className="company-name-heading">{companyName.toUpperCase()}</h2>
          </div>
          <div className="cards-container">

            {companyDetails.map((details, index) => (
              <div
                key={index}
                className={`company-card details-box ${activeBox === index ? "active" : ""}`}
                onClick={() => {
                  toggleDriveLink(index);
                  openDriveLink(details.driveLink);
                }}
              >
                <div className="circle"></div>
                <h2 className="college-name">{details.collegeName}</h2>
                <p className="info">Date: {details.date}</p>
                <p className="info">
                  Duration: {details.intern_or_FullTime.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}