import { Button } from "react-bootstrap"
import { Table } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { getTotal } from "./redux/cartSlice"
import ima1 from './1723377179400.png'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
const Navbar = ()=>
{
    const dis = useDispatch();
  const tq = useSelector((state)=>state.storecart.totalquantity) 
  const pro = useSelector((state)=>state.storecart.cart) 
  useEffect(()=>
  {
    dis(getTotal());
  },[pro]); 
    return(
        <>
        <div className="divsta1">
        <div className="divsta">
       

    <div><NavLink className='link' to='/'>Home</NavLink></div>
    <div><NavLink className='link' to='/bi'>Bill</NavLink></div>
    
    <div style={{textAlign:'center',
                display:'flex',justifyContent:'space-around',alignItems:'center',
    }}><h2 className="sph"><small>Selected product :</small><strong>{tq}</strong></h2></div>
       <div>
    <button className="ab">
    <NavLink to='/pr'><img src={ima1} className="c"/></NavLink>
        </button></div>
               
        </div>

        </div>
        </>
    )
}
export default Navbar