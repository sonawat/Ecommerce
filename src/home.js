import Button from 'react-bootstrap/Button';
import './home.css'
import Card from 'react-bootstrap/Card';
//import data from './data';
import { useDispatch,useSelector } from 'react-redux';
import './App.css'
import { addToCart } from './redux/cartSlice';
const Home = ()=>
{
  const dispatch = useDispatch();
  const da = useSelector(state=>state.storecart.data);
    // const[data,setData] = useState([]);
    // useEffect(()=>
    // {
    //     fetch("http://localhost:5000/users")
    //     .then((resp)=>
    //     {
    //         return resp.json();
    //     })
    //     .then((result)=>
    //     {
    //         setData(result);
    //     })
    // })

    return(
        <>
        <div className='fi'>
        
       {    
        da.map((item)=>
        <div style={{float:'left',marginTop:15}}>
        <Card style={{ width: '20rem', backgroundColor:'white'}}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body style={{backgroundColor:'rgb(201, 204, 206,0.4)',height:140}}>
        <Card.Title style={{color:'brown'}}>Price : {item.price}</Card.Title>
        <Card.Text>
        <h5 style={{color:'cadetblue'}}>Name : {item.name}</h5>
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(addToCart(item))}>Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
        )
       }
       </div>
        </>
    )
}
export default Home