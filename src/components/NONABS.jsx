import React from "react";

const NONABS = () => {
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
            FOR NON-ABS STUDENTS
          </h3>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "2px 2px 3px 2px #0004",
          }}
        >
          <form>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr", // Three equal columns
                gap: "20px", // Space between columns
                alignItems: "center", // Vertically align items
                paddingBottom: "12px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Name of Previous School *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Address *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder=""
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>School Code *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>
                  Percentage Obtained in Class-IX Final Examination: *
                </label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder=""
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Medium Of Instruction *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Primary Contact NO. *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder=""
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Reason for leaving previous school *</label>
                <input
                  style={{ height: "2.5rem" }}
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NONABS;
