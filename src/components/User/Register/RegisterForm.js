import { useRef } from "react";
import classes from "./RegisterForm.module.css";

const RegisterForm = (props) => {
  const name = useRef();
  const email = useRef();
  const phNumber = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      name.current.value.trim() === "" ||
      email.current.value.trim() === "" ||
      phNumber.current.value.trim() === ""
    ) {
      return;
    }

    const userData = {
      name: name.current.value,
      phoneNumber: phNumber.current.value,
      email: email.current.value,
    };

    props.onAddData(userData);
    console.log(
      "Name: " +
        name.current.value +
        "       Email: " +
        email.current.value +
        "       Phone Number: " +
        phNumber.current.value
    );
    name.current.value = "";
    email.current.value = "";
    phNumber.current.value = "";
    hideFormHandler();
  };

  const hideFormHandler = () => {
    props.onClose();
  };

  return (
    <form
      className={classes.form}
      autoComplete="off"
      onSubmit={formSubmitHandler}
    >
      <label htmlFor="name">NAME: </label>
      <input
        ref={name}
        name="name"
        type="text"
        id="name"
        placeholder="enter your name"
      />
      <label htmlFor="email"> E-mail: </label>
      <input
        ref={email}
        name="email"
        type="email"
        id="email"
        placeholder="enter your email-id"
      />
      <label htmlFor="phnumber">PHONE NUMBER: </label>
      <input
        ref={phNumber}
        name="phnumber"
        type="number"
        id="phnumber"
        placeholder="enter your phone number"
      />
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={hideFormHandler}
          type="button"
        >
          Cancel
        </button>
        <button className={classes.button} type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
