import {useState } from "react"
//import MakeList from "./MakeList";
import type { ListItem } from "../App"

type Props = {
    product: ListItem[]

}

//let id = 0;

export default function AddToList({ }: Props){

    const [productId, setProductId]= useState(0)
    const [productName, setProductName] = useState(' ')
    const [productQuant, setProductQuant] = useState(0)
    const [productPic, setProductPic] = useState('')


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {


    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" 
                        value ={productName}
                        onChange={(event) => setProductName(event.target.value)}
                        />
                    <label>Amount:</label>
                    <input type="number"
                        value = {productQuant}
                        onChange={(event) => setProductQuant(parseInt(event.target.value))}
                        />
                    <label>Picture Link:</label>
                    <input type="text" 
                        value = {productPic}
                        onChange={(event) => setProductPic(event.target.value)}
                    
                        />
                    <label>Item #:</label>
                    <input type="number" 
                        value = {productId}
                        onChange={(event) => setProductId(parseInt(event.target.value))}
                    
                        />
                <button >Submit</button>

            </form>

        </div>
    )


}