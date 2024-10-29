import { MDBBtn } from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import { getTotal, removeToCart } from "./redux/cartSlice";
import { Increment } from "./redux/cartSlice";
import { Decrement } from "./redux/cartSlice";
import "./App.css";
import { Padding } from "@mui/icons-material";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Product = () => {

  const dis = useDispatch();

  const pro = useSelector((state) => state.storecart.cart);
  const{totalPrice} = useSelector((state) => state.storecart);
  const totalq = useSelector((state)=>state.storecart.totalquantity);

  useEffect(()=>
  {
    dis(getTotal());
  },[pro]);
  return (
    <div>
      {/* <h1>{totalPrice}:{totalq}</h1> */}
      <section className="h-100 gradient-custom" style={{padding:0,margin:0}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart -{pro.length} items</h5>
                </div>
                <div className="card-body">
                  {pro?.map((data) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            style={{
                              height: 150,
                              backgroundColor: "silver",
                              borderRadius: 100,
                              Padding: 50,
                            }}
                            src={data.image}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.name}</strong>
                          <br />
                          <small>{data.description}</small>
                        </p>
                        <button class="button"  onClick={()=>dis(removeToCart(data))}>
  <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            // onClick={() =>
                            //   dispatch(decreaseItemQuantity(data.id))
                            // }
                            onClick={()=>dis(Decrement(data))}
                          >
                            <i className="fas fa-minus"></i>
                          -</button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.qauntity}
                              type="number"
                              className="form-control"
                              //   onChange={() => null}
                            />
                            <label className="form-label" for="form1">
                              Quantity
                            </label>
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            // onClick={() =>
                            //   dispatch(increaseItemQuantity(data.id))
                            // }
                            onClick={()=>dis(Increment(data))}
                          >
                            <i className="fas fa-plus"></i>
                          +</button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>Price : {data.price}</strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                      
                    </div>
                  ))}
        <h5 style={{backgroundColor:'blue',padding:'10px',color:'white',
      fontSize:'30px'}} className="mb-0">
            Amount : ${totalPrice}
            <span style={{float:'right'}}><Link to='/bi'><Button style={{marginBottom:'10px'}} variant="success">GO TO BILL</Button></Link></span></h5>
               
    
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};
export default Product;
