import React from "react";
import Products from "./components/Products/Products";

class App extends React.Component {
  state = {
    Products: [
      { name: "Tea & Cake", price: "79" },
      { name: "Coffee & Cake", price: "99" },
      { name: "Milk & Cake", price: "88" },
    ],
  };

  changePriceHandler = () => {
    this.setState({
      Products: [
        { name: "Tea & Cake", price: "71.1$  After 10% OFF" },
        { name: "Coffee & Cake", price: "69.3$  After 30% OFF" },
        { name: "Milk & Cake", price: "70.4$  After 20% OFF" },
      ],
    });
  };

  render() {
    return (
      <div>
        <h2>React App</h2>
        <h3>Products:</h3>
        <Products
          name={this.state.Products[0].name}
          price={this.state.Products[0].price}
        />
        <Products
          name={this.state.Products[1].name}
          price={this.state.Products[1].price}
        />
        <Products
          name={this.state.Products[2].name}
          price={this.state.Products[2].price}
        />
        <button onClick={this.changePriceHandler}>Change Price</button>
      </div>
    );
  }
}

export default App;
