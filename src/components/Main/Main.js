import React, { useEffect, useRef } from "react";
import AuthContext from "../../context/auth-context";

const Main = (props) => {
  const btnRef = useRef(null);
  useEffect(() => {
    console.log("Main.js useEffect");
    btnRef.current.click();
    return () => {
      console.log("Main.js cleanup");
    };
  }, []);

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
      <button ref={btnRef} style={btn} onClick={props.click}>
        Show/Hide Products
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Login</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default Main;
