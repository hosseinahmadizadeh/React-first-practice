import React from "react";
import Products from "./components/Products/Products";
import { useState } from "react";

const App = (props) => {
  const [productState, setProductState] = useState({
    Products: [
      { name: "Tea & Cake", price: "79" },
      { name: "Coffee & Cake", price: "99" },
      { name: "Milk & Cake", price: "88" },
    ],
  });

  const changePriceHandler = () => {
    setProductState({
      Products: [
        { name: "Tea & Cake", price: "71.1$  After 10% OFF" },
        { name: "Coffee & Cake", price: "69.3$  After 30% OFF" },
        { name: "Milk & Cake", price: "70.4$  After 20% OFF" },
      ],
    });
  };

  return (
    <div id="main" className="container">
      <h2>React App</h2>
      <h3>Products:</h3>
      <Products
        name={productState.Products[0].name}
        price={productState.Products[0].price}
      />
      <Products
        name={productState.Products[1].name}
        price={productState.Products[1].price}
      />
      <Products
        name={productState.Products[2].name}
        price={productState.Products[2].price}
      />
      <button onClick={changePriceHandler}>Change Price</button>
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     Products: [
//       { name: "Tea & Cake", price: "79" },
//       { name: "Coffee & Cake", price: "99" },
//       { name: "Milk & Cake", price: "88" },
//     ],
//   };

//   changePriceHandler = () => {
//     this.setState({
//       Products: [
//         { name: "Tea & Cake", price: "71.1$  After 10% OFF" },
//         { name: "Coffee & Cake", price: "69.3$  After 30% OFF" },
//         { name: "Milk & Cake", price: "70.4$  After 20% OFF" },
//       ],
//     });
//   };

//   render() {
//     return (
//       <div id="main" className="container">
//         <h2>React App</h2>
//         <h3>Products:</h3>
//         <Products
//           name={this.state.Products[0].name}
//           price={this.state.Products[0].price}
//         />
//         <Products
//           name={this.state.Products[1].name}
//           price={this.state.Products[1].price}
//         />
//         <Products
//           name={this.state.Products[2].name}
//           price={this.state.Products[2].price}
//         />
//         <button onClick={this.changePriceHandler}>Change Price</button>
//       </div>
//     );
//   }
// }

export default App;
