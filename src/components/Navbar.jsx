import React from "react";

const Navbar = () => {
  return (
    <>
      <div style={{margin: "2rem 10rem 0 10rem"}}>
        <div>
          <p
            style={{
              border: "1px solid transparent",
              textAlign: "center",
              backgroundColor: "#f7de67",
              fontWeight: "bolder",
              fontSize: "10px",
              width: "44%",
              height: "38px",
              margin: "0 0 0 25%",
              paddingTop: "15px"
            }}
          >
            IF YOU HAVE ALREADY REGISTERED, CLICK HERE TO DOWNLOAD THE FILLED
            OUT APPLICATION FORM
          </p>
          <p style={{ color: "#982628", fontSize: "14px", paddingLeft: "15px"}}>
            Kindly check (*) mandatory fields and fill them before proceeding
          </p>
        </div>

      </div>
    </>
  );
};

export default Navbar;
