import React from "react";
import { useState } from "react";
import "../../css/upload.css"

export default function Oaupload() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyPhoto: "",
    driveLink: "",
    collegeName: "",
    date: "",
    internOrFullTime: "Intern",
  });

  const [_, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadData = async (base64EncodedImage) => {
    try {
      const response = await fetch("https://getsetoa-api.vercel.app/api/v1/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          base64EncodedImage,
        }),
      });

      if (response.ok) {
        alert("Data uploaded successfully!");
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Upload failed. Please try again.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadData(reader.result);
      setFileInputState("");
      setPreviewSource("");
      console.log(formData);
    };
    reader.onerror = () => {
      console.error("Error reading the file.");
    };
  };

  return (
    <div className="body-10">
      <div className="welcome-box">
        <h1>Welcome,</h1><h1>Collaborators</h1>

      </div>
      <div className="upload-form-container2">
        {/* <Navbar user={user} /> */}
        <h1 className="formHead3">Offcampus Alerts</h1>
        <form onSubmit={handleSubmit} className="upload-form2">
          <div className="inner">

            { /* <label htmlFor="companyName" className="formHead2">
            Company Name
          </label> */ }
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
            />


            {/* <label htmlFor="fileInput" className="formHead2">
            Upload Company Logo
          </label> */}
            <input
              id="fileInput"
              type="file"
              name="companyPhoto"
              onChange={handleFileInputChange}
              className="form-input2"
            />
          </div>



          <div className="inner">{/* <label htmlFor="driveLink" className="formHead2">
            Paste PDF Drive Link Please
          </label> */}
            <input
              type="text"
              name="driveLink"
              value={formData.driveLink}
              onChange={handleInputChange}
              placeholder="drive.google.com/file"
              required
            />


            {/* <label htmlFor="collegeName" className="formHead2">
            College Name
          </label> */}
            <input

              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleInputChange}
              placeholder="College Name"
              required
            /></div>


          <div className="inner">{/* <label htmlFor="date" className="formHead2">
            Date
          </label> */}
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="Date"
              required
            />


            {/* <label htmlFor="internOrFullTime" className="formHead2">
            Intern or Full Time
          </label> */}
            <select
              className="formHead2-inner"
              name="internOrFullTime"
              value={formData.internOrFullTime}
              onChange={handleInputChange}
            >
              <option value="Intern">Intern</option>
              <option value="FullTime">FullTime</option>
            </select></div>


          <button className="btn2" type="submit">
            Upload
          </button>

        </form>
        <div className="upload-preview2">
          {previewSource && (
            <img
              src={previewSource}
              alt="chosen"
            // style={{ height: "700px", width: "700px" }}
            />
          )}
        </div>
      </div>
    </div>);
}
