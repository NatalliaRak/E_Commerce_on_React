import React from "react";
import { useCart, useDispatchCart } from "../components/Cart";

const CartItem = ({ product, index, handleRemove }) => {
  return (
    <div className="row container p-4">
      <div className="row" key={product.id}>
        <div className="col-sm-2">
          <img src={product.image} alt='ImageProduct'  height='100px' width='100px'/>
        </div>
        <div className="col-sm-2">
        <h5>{product.title}</h5>
        </div>
        <div className="col-sm-8">
        <p>Price</p>
            <p>
              {product.price.toLocaleString("en", {
                style: "currency",
                currency: "USD"
              })}
            </p>
            <button className="btn btn-danger" onClick={() => handleRemove(index)}>Remove from cart</button>
          </div>
      </div>
    </div>
  );
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <main>
      <div className="container">
      <p className="h2">
        Total price:
        <strong>{" "}
        {totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "USD"
        })} </strong>
      </p>
      </div>
      <div>
      {items.map((item, index) => (
        <div>
        <CartItem
          key={index}
          handleRemove={handleRemove}
          product={item}
          index={index}
        />
        </div>
      ))}
      </div>
    </main>
  );
}
