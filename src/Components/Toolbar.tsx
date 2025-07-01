//Imports the Toolbar Buttons into the Toolbar component and defines the buttons

import { useState } from "react";
import type {ListItem} from "../App"
import ToolbarButton from "./ToolbarButton"
import AddToList from "./AddToList";
import MakeList from "./MakeList";
import  { shopList } from "./MakeList";





export default function Toolbar({}) {
    const [products, setProducts] = useState([{}, {}]);
    const handleAddProduct = () => {
        
       
        setProducts([{name:setProducts}])
    }


    
     return (
    <div className = "container">
        <div className="btn-group">
        <ToolbarButton text={'Add Item'} onClick={()=> handleAddProduct()}/>  
        <ToolbarButton text={'Change Item'} onClick={()=>alert("Change Item")}/>
        <ToolbarButton text={"Don't Click Here"} onClick={()=>alert("Do not click this button!")}/>
        </div>
    </div> 
    )
}
    