import React from "react";
import Products from "./Products";
import products from "..//..//..//data/products.json";

export default function UseState() {
  //   console.log(products);
  return (
    <div>
      <h3>Use state</h3>
      <Products data={products} />
    </div>
  );
}
