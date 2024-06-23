import React from "react";

const Stream = () => {
  return (
    <>
      <div style={{ margin: "0 10rem 0 10rem" }}>
      <div style={{backgroundColor:"white", padding:"20px", boxShadow: "2px 2px 3px 2px #0004"}}>
      <p>Stream Preferred [Class-XI] *</p>
      <div style={{fontWeight:"lighter"}}>
        <input type="radio" id="science"></input>
        <label for="science">Science</label>
        <br />
        <br />

        <input type="radio" id="commerce"></input>
        <label for="commerce">Commerce [With Mathematics]</label>
        <br />
        <br />

        <input type="radio" id="commerceGeneral"></input>
        <label for="commerceGeneral">Commerce [With Mathematics]</label>
        <br />
        <br />

        <input type="radio" id="humanities"></input>
        <label for="humanities">Humanities [With Mathematics]</label>
        <br />
        <br />

        <input type="radio" id="humanitiesGeneral"></input>
        <label for="humanitiesGeneral">Humanities [With Mathematics]</label>
      </div>
      </div>
        
      </div>
    </>
  );
};

export default Stream;
