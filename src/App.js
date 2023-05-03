import React from "react";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div id="main" className="container">
      <h2>React App</h2>
      <h3>Products:</h3>
      <Products name="Cake" price="65" />
      <Products name="Coffee" price="78" />
      <Products name="Tea" price="47"></Products>
    </div>
  );
};

export default App;
