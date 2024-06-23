import React from "react";

const Disclaimer = () => {
  return (
    <>
      <div style={{ margin: "0 10rem 8rem 10rem" }}>
        <div>
          <h3
            style={{
              backgroundColor: "#2C3E50",
              color: "white",
              fontWeight: "light",
              textAlign: "left",
              padding: "5px 0px 5px 5px",
            }}
          >
            UNDERTAKING BY THE PARENTS READ THIS BEFORE PROCEEDING{" "}
          </h3>
        </div>

       
          <div style={{ fontSize: "12px" , backgroundColor: "rgb(231 242 245)", padding:"2px 20px 0 20px", boxShadow: "2px 2px 3px 2px #0004"}}>
            <p>
              ☛ The information given is true to our knowledge and belief. If
              any information is found to be contrary to the facts the admission
              of our ward may be cancelled at any stage.
            </p>
            <p>
              ☛ We understand that filling up of this registration form does not
              mean that our child will be given admission and the registration
              fee is <strong>non-refundable</strong>.
            </p>
            <p>
              ☛ We understand that the decision of the Management of the school
              regarding our ward's admission shall be final and binding on us.
            </p>
            <p>
              ☛ We hereby certify that the information given in the{" "}
              <strong>Registration Form is complete and accurate</strong>. We
              understand and agree that misrepresentation or omission of facts
              will justify the cancellation of Registration form.
            </p>
            <br />
          </div>

        <div style={{ margin: "12px", textAlign: "center" , paddingTop: "25px" }}>
          <button
            style={{
              width: "12%",
              height: "32px",
              backgroundColor: "rgb(0, 123, 255)",
              color: "white",
              border: "1px solid grey",
              borderRadius: "3px",
              fontSize: "10px",
            }}
          disabled>
            I AGREE
          </button>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
