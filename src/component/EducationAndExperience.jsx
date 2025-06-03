import React, { useState } from "react";
import "../css/qualification.css";
const EducationAndExperience = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div id="education">
      <h1 className="heading">Qualifications</h1>
      <p>My Journey</p>

      <div className="tabs">
        <p
          className={`tab ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          🎓 Education
        </p>
        <p
          className={`tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          💼 Experience
        </p>
      </div>
      <div>
        {activeTab === "education" ? (
          <>
            <div className="education-1">
              <div className="education-data">
                <h4>Undergraduation</h4>
                <p>Rayat Bahra University - Mohali</p>

                <p>
                  <i className="bi bi-calendar-date"></i> 2020-2024
                </p>
              </div>
              <div className="data">
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="education-1 edu-1">
              <div className="data">
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div className="education-data">
                <h4>Class - XII</h4>
                <p>GMSSS, sector-33D - Chandigarh</p>

                <p>
                  <i className="bi bi-calendar-date"></i> 2019-2020
                </p>
              </div>
            </div>

            <div className="education-1 edu-2">
              <div className="education-data">
                <h4>Class - XII</h4>
                <p>Mohali Public School - Mohali</p>

                <p>
                  <i className="bi bi-calendar-date"></i> 2017-2018
                </p>
              </div>
              <div className="data">
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="education-1 edu-3">
              <div className="education-data">
                <h4>Frontend Developer</h4>
                <p>Webmob Software Solutions</p>

                <p>
                  <i className="bi bi-calendar-date"></i> 1 October, 2025 - Present
                </p>
              </div>
              <div className="data">
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="education-1 edu-1">
              <div className="data">
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div className="education-data">
                <h4>Frontend Intern</h4>
                <p>Webmob Software Solutions</p>
                <p>
                  <i className="bi bi-calendar-date"></i> 11 March, 2024 - 30
                  September, 2024
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EducationAndExperience;
