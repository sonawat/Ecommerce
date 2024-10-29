import { useSelector,useDispatch } from 'react-redux'
import { getTotal } from './redux/cartSlice';
import { useEffect } from 'react';
import im1 from './1723377179400.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Bill = ()=>
{
  const dis = useDispatch();

  const pro = useSelector((state) => state.storecart.cart);
    const{totalPrice,totalquantity} = useSelector((state)=>state.storecart) 
  
  useEffect(()=>
  {
    dis(getTotal());
  },[pro]);

    return(
        <>

    <div className="div1">
        <div className="div2">
            
        <div style={{display:'flex', flexWrap:'wrap'}}>
        <div className="div4">
            <h6>-</h6>
        <span style={{marginLeft:30,marginTop:20}}><img src={im1}  className='im'/>
        <br/><h1 className='inv'>Invoice</h1></span>
        </div>
        <div className="div6">
            <table className="ta">
                <tr>
                <td className="ita">Sonawat Website</td>
                </tr>
                <tr>
                <td className="spa">Date:12-08-2024</td>
                </tr>
                <tr>
                <td className="spa">Akodara</td>
                </tr>
                <tr>
                <td className="spa">Mandsour</td>
                </tr>
                <tr>
                <td className="spa">Time 09:35</td>
                </tr>
            </table>
        </div>
        </div>
            
        <div className='div9'>
        <table className='tb'>
            <tr>
                <th className='fsi'>Id</th>
                <th className='fsi'>Items</th>
                <th className='fsi'>Price</th>
                <th className='fsi'>Quantity</th>
                <th className='fsi'>Amount</th>
            </tr>
         <tr>
            <td colSpan='5'><hr/></td>
         </tr>
           {
            pro.map((item,i)=>

            <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <th>{item.price}</th>
                <th>{item.qauntity}</th>
                <th>{item.price*item.qauntity}</th>
            </tr>
            )
           }
        </table>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
        <div className='div7'>
        <Link to="/pr"><Button>GOT TO CHECKBOX</Button></Link>
        </div>
        <div className='div8'>
            <table>
                <tr><th style={{color:'white',fontSize:25,fontStyle:'italic'}}>Total Product : {totalquantity}</th></tr>
                <tr><th style={{color:'white',fontSize:25,fontStyle:'italic'}}>Total Amount : ${totalPrice}</th></tr>
            </table>
        </div>
        </div>
        </div>
        </div>
    
        </>
    )
}

export default Bill