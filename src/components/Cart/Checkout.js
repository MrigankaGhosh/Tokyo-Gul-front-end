import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const phoneNumber = useRef();
  const cartCtx = useContext(CartContext);

  let orderedItems = [];
  let Array;

  const confirmHandler = (e) => {
    e.preventDefault();
    cartCtx.items.map((item) => {
      console.log(item.name);
      return orderedItems.push(item.name);
    });

    console.log("........: " + Array);
    console.log("Before sending: " + orderedItems);

    const addDataHandler = async (orderedItems) => {
      const response = await fetch(
        "http://localhost:8090/menu?phoneNumber=" + phoneNumber.current.value,
        {
          method: "POST",
          body: JSON.stringify({ strings: [`${[...orderedItems]}`] }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.status);
    };

    addDataHandler(orderedItems);
    orderedItems = [];
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="phNumber">Phone Number</label>
        <input
          ref={phoneNumber}
          type="number"
          id="phNumber"
          maxLength="10"
          minLength="10"
          placeholder="confirm your phone number before checking out"
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
