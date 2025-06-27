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

 const [product, setProduct] = useState<Product | undefined>(undefined);

return(
<div>
    <div className="container-fluid">
    <h1 className = "bg-warning text-center text-primary" >Shopping List App</h1> {/*Page header/title */}
    </div>
      <div className= "container-fluid"> {/* container for the Toolbar with buttons from ./Toolbar */}
      <Toolbar/>
      </div>
        <div className = 'col-md-12 text-center col-flex' >
        <div className=''>
            <h2 className='text-center my-3'>Shopping List</h2> {/*Subheading for List */}
            </div>
</div>
<div>


</div>
 {/*
<MakeList product = {ProductProps}/> 

*/}
</div>

)
}