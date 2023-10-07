import {useState} from 'react'
import PRODUCTS from "./../../../data/products.json"
import Products from './Products';

export default function UseState() {
    console.log('useState -- child component')
    // console.log({PRODUCTS})
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Jaskaran");
    const [product, setProduct] = useState({
        name : "ProductName",
        price : 50,
        type : "cloth"
    })

  return (
    <div>
      <h4>Use State counter value : {counter}</h4>
      <button onClick={() => setCounter( counter + 1)}>Click me to update counter</button>

      <h4>Name is : {name}</h4>
      <input onChange={(event) => setName(event.target.value)} />

       <h4>Product </h4>
        <input type="text" placeholder='change product name' onChange={(event) => setProduct({
            ...product,
            name : event.target.value
        })} />
        <input type='text' placeholder='change price' onChange={(event) => setProduct({
            ...product,
            price : event.target.value

        })}/>
        <input type='text' placeholder='change cloth' onChange={(event) => setProduct({
            ...product,
            type : event.target.value
        })} />

        <table>
            <tr>
                <td>Name</td>
                <td>{product.name}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>{product.price}</td>
            </tr>
            <tr>
                <td>Type</td>
                <td>{product.type}</td>
            </tr>
        </table>

        <Products data={PRODUCTS} />

    </div>
  )
}
