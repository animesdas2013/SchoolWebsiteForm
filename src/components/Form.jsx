import React from "react";

const Form = () => {
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
            CANDIDATE'S DETAILS
          </h3>
        </div>
        <div style={{backgroundColor: "white", boxShadow: "2px 2px 3px 2px #0004"}}>
          <form style={{padding: "20px"}}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr", // Three equal columns
                gap: "20px", // Space between columns
                alignItems: "center", // Vertically align items
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>First Name *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Middle Name</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Last Name *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Date of Birth [DD-MM-YYYY]*</label>
                <p style={{ color: "red", fontSize: "12px" }}>
                  (Date of birth should be before 01-04-2009)
                </p>
                <input
                  style={{ height: "2.5rem" }}
                  type="date"
                  placeholder="dd-mm-yyyy"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Mobile No. for SMS alert *</label>
                <p style={{ color: "blue", fontSize: "12px" }}>
                  (Please deactivate your number for DND)
                </p>
                <input
                  style={{ height: "2.5rem" }}
                  type="number"
                  placeholder="EG.9876543210"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Email Id *</label>
                <p style={{ color: "white", fontSize: "12px" }}>**</p>
                <input
                  style={{ height: "2.5rem" }}
                  type="email"
                  placeholder="Enter Your Email Id"
                />
              </div>
            </div>

            <br />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr", // Two equal columns
                gap: "20px", // Space between columns
                alignItems: "center", // Vertically align items
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Father's Name *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder="Father's Name"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Mother's Name *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder="Mother's Name"
                />
              </div>
            </div>
            <br />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr", // 1 columns
                gap: "20px", // Space between columns
                alignItems: "center", // Vertically align items
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Residential Address *</label>
                <textarea
                  style={{ height: "6rem" }}
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <br />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr", // Three equal columns
                gap: "20px", // Space between columns
                alignItems: "center", // Vertically align items
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "12px" }}>
                  Upload Image * (Candidate), ( Only jpg and png file accepted )
                  *
                </label>
                <br />
                <div style={{ border: "1px solid grey", height: "2.5rem" }}>
                  <input
                    style={{ height: "2.5rem", paddingLeft: "8px" }}
                    type="file"
                    placeholder="No Choosen File"
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "12px" }}>
                  Upload Image * ( Father ), ( Only jpg and png file accepted )
                </label>
                <br />
                <div style={{ border: "1px solid grey", height: "2.5rem" }}>
                  <input
                    style={{ height: "2.5rem", paddingLeft: "8px" }}
                    type="file"
                    placeholder="No Choosen File"
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontSize: "12px" }}>
                  Upload Image * ( Mother ), ( Only jpg and png file accepted )
                </label>
                <br />
                <div style={{ border: "1px solid grey", height: "2.5rem" }}>
                  <input
                    style={{ height: "2.5rem", paddingLeft: "8px" }}
                    type="file"
                    placeholder="No Choosen File"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
