import React from 'react'

export default function Products({data}) {
    console.log({data})
  return (
    <div>
      {data.products.map(function(product){
        return (
            <div className='product-card' key={product.id}>
                <div className='product-section'>
                    <div>
                        <h4 className="product-title">{product.title}</h4>
                        <p className="product-brand">{product.brand}</p>
                        <p className="product-price">$ {product.price}</p>
                    </div>
                    <div>
                        <img src={product.thumbnail} width={100}/>
                    </div>
                </div>
                <h4>Gallery</h4>
                <div className='product-gallery'>
                    {product.images.map(function(image, index){
                        return (
                            <img src={image} height={60} key={index}/>
                        );
                    })}
                </div>
            </div>
        );
      })}
    </div>
  )
}