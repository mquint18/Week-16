import type { ListItem } from "../App"
import AddToList from "./AddToList"
import type { useState } from "react";

type ProductProps = {
    product: ListItem[];
    setProduct: (product: object) => void
}


export default function MakeList({product}: ProductProps) {

    
    


    return(

        <div>
            <h2>Shopping List</h2>
            {product.map(item => (
                <div key={item.id}>
                    {item.name} 
                    {item.picture}
                    {item.quantity}
                    {item.id}
                </div>
            ))}
            <div>
            <AddToList product = {product}/> 

            </div>
        </div>
    )
}