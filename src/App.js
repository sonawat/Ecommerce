import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from "./home"
import Product from './Product'
import Navbar from './Navbar'
import Bill from './bill'
const App = ()=>
{
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <div style={{height:68,width:200}}>

    </div>
   
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pr' element={<Product />}/>
      <Route path='/bi' element={<Bill />}/>
    </Routes>
      </BrowserRouter>
      </>
  )
}

export default App