import React from "react";
import { useDispatchCart } from "./Cart";
import '../App.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const Product = ({ product }) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <article className="m-4 p-2">
      <div>
      <div className="text-center container p-2" key={product.id}>
        <div className="container">
         <img
                 src={product.image}
                 alt="ImageProduct"
                 width='100%'
              />
        </div>      
                  <h5>{product.title}</h5>
                  <a href={product.category}>{product.category}</a>
                  <p>
                     {product.price.toLocaleString("en", {
                      style: "currency",
                      currency: "USD"
                    })}
                  </p>
                  <div className="p-4">
                  <OverlayTrigger 
                            className='align-self-end position relative'
                            trigger="click"
                            key={product.id}
                            overlay={
                            <Popover>
                                <Popover.Header style={{textAlign: 'center'}} as="h4">
                                  {product.title}
                                </Popover.Header>
                                <Popover.Body>
                                   {product.description}  
                                </Popover.Body>
                            </Popover>
                            }
                        >
                              <button  className='btn btn-warning justify-content-end'>Description</button>
                        </OverlayTrigger>
                      </div>  
                  <div className="text-center container">
                 <h3> 
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color="#0C4C4B" fill="currentColor" className="icon" viewBox="0 0 16 16"
             onClick={() => addToCart(product)}>
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
             </svg>
              </h3>
                  </div>

          
        </div>
      </div>


    </article>    
  );
};

export default Product;
