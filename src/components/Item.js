import userEvent from "@testing-library/user-event";
import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);

  function makeToCart() {
    setIsInCart((isInCart) =>!isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={makeToCart} className="add">{isInCart ? "Remove From" : "Add to"} cart</button>
    </li>
  );
}

export default Item;
