import React from "react";
import Products from "./components/Products/Products";
// import { useState } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    products: [
      { name: "Tea & Cake", price: "79" },
      { name: "Coffee & Cake", price: "99" },
      { name: "Milk & Cake", price: "88" },
    ],
    showProducts: false,
  };

  toggleProductsHandler = () => {
    const show = this.state.showProducts;
    this.setState({ showProducts: !show });
  };

  deleteProductHandler = (productIndex) => {
    const products = [...this.state.products];
    products.splice(productIndex, 1);
    this.setState({ products: products });
  };

  render() {
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

    let products = null;
    if (this.state.showProducts) {
      products = (
        <div>
          {this.state.products.map((item, index) => {
            return (
              <Products
                click={() => this.deleteProductHandler(index)}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div id="main" className="container">
        <h2>Cafe</h2>
        <h3>Products:</h3>
        <button style={btn} onClick={this.toggleProductsHandler}>
          Show/Hide Products
        </button>
        {products}
      </div>
    );
  }
}

export default App;

// const App = (props) => {
//   const [productState, setProductState] = useState({
//     Products: [
//       { name: "Tea & Cake", price: "79" },
//       { name: "Coffee & Cake", price: "99" },
//       { name: "Milk & Cake", price: "88" },
//     ],
//   });

//   const changePriceHandler = () => {
//     setProductState({
//       Products: [
//         { name: "Tea & Cake", price: "71.1$  After 10% OFF" },
//         { name: "Coffee & Cake", price: "69.3$  After 30% OFF" },
//         { name: "Milk & Cake", price: "70.4$  After 20% OFF" },
//       ],
//     });
//   };

//   return (
//     <div id="main" className="container">
//       <h2>React App</h2>
//       <h3>Products:</h3>
//       <Products
//         name={productState.Products[0].name}
//         price={productState.Products[0].price}
//       />
//       <Products
//         name={productState.Products[1].name}
//         price={productState.Products[1].price}
//       />
//       <Products
//         name={productState.Products[2].name}
//         price={productState.Products[2].price}
//       />
//       <button onClick={changePriceHandler}>Change Price</button>
//     </div>
//   );
// };
