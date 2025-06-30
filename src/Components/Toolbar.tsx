//Imports the Toolbar Buttons into the Toolbar component and defines the buttons

import ToolbarButton from "./ToolbarButton"

export default function Toolbar({setProduct}) {
    const handleAddProduct = () => {
        const newProduct = prompt("Pleae enter product");
        setProduct([{name:newProduct}])
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