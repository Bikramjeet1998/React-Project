import React from "react";

export default function Products({ data }) {
  console.log(data);
  return (
    <div className="main">
      Products Details
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {data.Products.map(function (product) {
            return (
              <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
