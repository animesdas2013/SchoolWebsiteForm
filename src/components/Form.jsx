import React from "react";

const Form = () => {
  return (
    <div style={{ margin: "10px" }}>
    <form>
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr", // Three equal columns
      gap: "20px", // Space between columns
      alignItems: "center", // Vertically align items
    }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>First Name</label>
        <input style={{height:"2.5rem"}} type="text" placeholder="First Name" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Middle Name</label>
        <input style={{height:"2.5rem"}} type="text" placeholder="Middle Name" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Last Name</label>
        <input style={{height:"2.5rem"}} type="text" placeholder="Last Name" />
      </div>

      <div style={{ display: "flex", flexDirection: "column"}}>
        <label>Date of Birth [DD-MM-YYYY]*</label>
        <input style={{height:"2.5rem"}} type="date" placeholder="First Name" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Mobile No. for SMS alert *</label>
        <input style={{height:"2.5rem"}} type="number" placeholder="EG.9876543210" />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Email Id *</label>
        <input style={{height:"2.5rem"}} type="email" placeholder="Enter Your Email Id" />
      </div>
    </div>

  </form>
    </div>
  );
};

export default Form;
