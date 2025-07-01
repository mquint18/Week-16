import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import Toolbar from './Components/Toolbar'
//import NewProducts from './Components/NewProduct.tsx'
import MakeList from './Components/MakeList'
import AddToList from './Components/AddToList'



export type ListItem = {

            id: number,
            name: string,
            quantity: number,
            picture: string
}




export default function App() {

 const [product, setProduct] = useState<any | undefined>([]);
console.log(product)

return(
<div>
    <div className="container-fluid">
    <h1 className = "bg-warning text-center text-primary" >Shopping List App</h1> {/*Page header/title */}
    </div>
      <div className= "container-fluid"> {/* container for the Toolbar with buttons from ./Toolbar */}
      <Toolbar/>
        <div className = 'col-md-12 text-center col-flex'> 
        
</div>
<div>


</div>
 
<AddToList product = {product} setProduct = {setProduct}/> 


</div>
</div>

)
}