import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="phNumber">Phone Number</label>
        <input
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
