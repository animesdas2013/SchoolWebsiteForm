import React from "react";

const CompulsorySubjects = () => {
  return (
    <>
      <div style={{ margin: "0 10rem 0 10rem" }}>
        <div>
          <h3
            style={{
              backgroundColor: "orange",
              color: "white",
              fontWeight: "light",
              textAlign: "center",
              padding: "5px 0px 5px 0px",
            }}
          >
            COMPULSORY SUBJECT FOR SCIENCE/COMMERCE/HUMANITIES
          </h3>
        </div>
        <div style={{backgroundColor:"white", padding:"20px", boxShadow: "2px 2px 3px 2px #0004"}}>
          <div style={{ fontSize: "15px" }}>
            <p style={{fontSize:"16px", fontFamily:"sans-serif"}}>Subject/s Offered [English + 5 Elective Subjects]:</p>
            <input type="radio" id="english"></input>
            <label for="english">English</label>
            <br />
            <input type="radio" id="supw"></input>
            <label for="supw">SUPW</label>
            <br />
            <input type="radio" id="language1"></input>Hindi/
            <input type="radio" id="language2"></input>Bengali
            <br />
          </div>

          <div style={{ fontSize: "15px" }}>
            <p style={{fontSize:"15px", fontFamily:"sans-serif"}}>Science [Elective Subjects]:</p>
            <input type="radio" id="mathematics"></input>
            <label for="mathematics">Mathematics</label>
            <br />
            <input type="radio" id="physics"></input>
            <label for="physics">Physics</label>
            <br />
            <input type="radio" id="chemistry"></input>
            <label for="chemistry">Chemistry</label>
            <br />
            <input type="radio" id="sub1"></input>Biology/
            <input type="radio" id="sub2"></input>Com.Science
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompulsorySubjects;
