import {useState } from "react"
//import MakeList from "./MakeList";
import type { ListItem } from "../App"

type ProductProps = {
    product: ListItem[];
    setProduct: (product: object) => void
}


//let id = 0;

export const shopList = [{}];


export default function AddToList({product}: ProductProps){

    const [productId, setProductId]= useState(0)
    const [productName, setProductName] = useState(' ')
    const [productQuant, setProductQuant] = useState(0)
    const [productPic, setProductPic] = useState('')


    const handleFormSubmit = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
    }

    const [formData, setFormData] = useState({productId:0, productName:'', productQuant:0, productPic:''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
    }
    


    return (
        <div>
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
            

            </div>
        </div>

            <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" 
                        name ="name"
                        value ={formData.productName}
                        onChange={handleChange} />
                    <label>Amount:</label>
                    <input type="number"
                        name ='quantity'
                        value = {formData.productQuant}
                        onChange={handleChange}
                        />
                    <label>Picture Link:</label>
                    <input type="text" 
                        name='picture'
                        value = {formData.productPic}
                        onChange={handleChange}
                    
                        />
                    <label>Item #:</label>
                    <input type="number" 
                        name="id"
                        value = {formData.productId}
                        onChange={handleChange}
                    
                        />
                <button >Submit</button>

            </form>

        </div>
    )


}