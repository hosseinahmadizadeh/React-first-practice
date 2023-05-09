import React, { useEffect } from "react";

const Main = (props) => {
  useEffect(() => {
    console.log("Main.js useEffect");
    setTimeout(() => {
      alert("Http Request");
    }, 2000);
  }, [props.products]);

  const btn = {
    backgroundColor: "#7b1fa2",
    color: "#ffffff",
    font: "inherit",
    border: "none",
    outline: "none",
    borderRadius: "3px",
    padding: "0.6rem",
    margin: "0.6rem auto",
  };

  return (
    <div>
      <h2>Cafe</h2>
      <h3>Products:</h3>
      <button style={btn} onClick={props.click}>
        Show/Hide Products
      </button>
    </div>
  );
};

export default Main;
