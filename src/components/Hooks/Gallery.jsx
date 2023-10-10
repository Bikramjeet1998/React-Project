import React from 'react'

export default function Gallery({images}) {
  return (
    <>
        <h4>Gallery</h4>
        <div className="product-gallery">
            {images.map(function (image, index) {
                return <img src={image} height={60} key={index} />;
            })}
        </div>      
    </>
  )
}
