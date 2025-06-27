import React from "react"
import {useState} from "react";
//import {products} from "./DefaultList.tsx";


let nextId = 0;

export default function ShoppingList() {
    
    const [name, setName] = useState('');
    const [{products}, setProducts] = useState([]);

    return (

        <>
         <h1>Shopping List</h1>
         <input 
         value = {name} 
         onChange {e => setName(e.target.value)}
          />
        <button onClick={() => {
            setProducts([...products, 
                {id: nextId++, name: name}]);

        }}>Add Item</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}> {product.name}</li>
                ))}
            </ul>

        
        </>

    );

}