import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const phoneNumber = useRef();
  const cartCtx = useContext(CartContext);
  const [showBillBtn, setShowBillBtn] = useState(false);

  let orderedItems = [];

  const confirmHandler = (e) => {
    e.preventDefault();

    cartCtx.items.map((item) => {
      console.log(item.name);
      return orderedItems.push(item.name);
    });

    console.log("Before sending: " + orderedItems);

    const addDataHandler = async (orderedItems) => {
      const response = await fetch(
        "http://localhost:8091/menu?phoneNumber=" + phoneNumber.current.value,
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
    setShowBillBtn(true);
  };

  const form = (
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

  const billBtn = (
    <div className={classes.actions}>
      <Link to="/bill">
        <button
          type="button"
          onClick={props.onCancel}
          className={classes.submit}
        >
          Show Bill
        </button>
      </Link>
    </div>
  );

  return (
    <>
      {!showBillBtn && form}
      {showBillBtn && billBtn}
    </>
  );
};

export default Checkout;
