import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import "../css/oaquestion.css";
export default function Home({ user }) {
    // const [isLoading, setIsLoading] = React.useState(true);
    const [uniqueCompanies, setUniqueCompanies] = useState([]);
    React.useEffect(() => {
        getUniqueCompanies();
      }, []);

      const getUniqueCompanies = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/v1/getData/unique-companies"
          );
          // console.log(response.data);
          setUniqueCompanies(response.data);
        } catch (error) {
          console.error("Error fetching unique companies:", error);
        }
      };

      const logout = () => {
        window.open("http://localhost:4000/auth/logout", "_self");
      };

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 700);
    // }, []);

    let cards = uniqueCompanies.map((company, index) => {
        return (
            // added key
            <Link
                to={`/Home/${company._id}`}
                key={index}>
                <div className="offcampusCardWrapper1 card1">
                    <img
                        src={company.companyLogo}
                        alt={`${company._id} Logo`}
                        className="cardImg1 card-image1"></img>
                    <div className="offcampusDataDiv1 card-details1">
                        <h3 className="offcampusName1 card-inner-detail1">
                        {company._id.toUpperCase()}
                        </h3>
                        {/* <h3 className="role card-inner-detail">Role : {data.role}</h3>
                        <h3 className="roleName card-inner-detail">
                            Eligible Batch : {data.Eligibility}
                        </h3> */}
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <div className="body1">
            <Navbar user={user} />
            <div className="offcampusWrapper1 card-container1">
            {!uniqueCompanies.length ? (
          <div>
            <Loader />
          </div>
        ) : (
          
            <>{cards}</>
        )}
            </div>
        </div>
    );
}
