import React from "react";

const Navbar = () => {
  return (
    <>
      <div style={{margin: "10px"}}>
        <div>
          <p
            style={{
              border: "1px solid yellow",
              textAlign: "center",
              backgroundColor: "yellow",
              fontWeight: "bolder",
              fontSize: "10px",
            }}
          >
            IF YOU HAVE ALREADY REGISTERED, CLICK HERE TO DOWNLOAD THE FILLED
            OUT APPLICATION FORM
          </p>
          <p style={{ color: "red", fontSize: "14px" }}>
            Kindly check (*) mandatory fields and fill them before proceeding
          </p>
        </div>

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
            CANDIDATE'S DETAILS
          </h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
