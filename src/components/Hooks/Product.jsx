import React from "react";
import Gallery from "./Gallery";

export default function Product({product, index}) {
  return (
    <div
      className={"product-card " + (index % 2 === 0 ? "bg-gray" : "bg-white")}
      key={product.id}
    >
      <div className="product-section">
        <div>
          <h4 className="product-title">{product.title}</h4>
          <p className="product-brand">{product.brand}</p>
          <p
            className={
              "product-price " +
              (product.price > 300 ? "text-red" : "text-blue")
            }
          >
            $ {product.price}
          </p>
        </div>
        <div>
          <img src={product.thumbnail} width={100} />
        </div>
      </div>
    
      {index % 2 === 0 ? <Gallery images={product.images}/> :  null }
      
    </div>
  );
}
