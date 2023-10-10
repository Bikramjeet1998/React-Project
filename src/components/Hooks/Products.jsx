import React from 'react'
import Product from "./Product"
export default function Products({data}) {
  console.log({data})
  return (
    <div className="products-wrapper">
      {data.products.map(function(product, index){
        return (
            <Product index={index} product={product} key={index}/>
        );
      })}
    </div>
  )
}
