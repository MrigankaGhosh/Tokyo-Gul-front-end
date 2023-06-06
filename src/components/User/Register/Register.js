import RegisterForm from "./RegisterForm";
import Modal from "../../UI/Modal";
import classes from "./Register.module.css";

const Register = (props) => {
  const addDataHandler = async (userData) => {
    const response = await fetch("http://localhost:8091/register", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
  };

  return (
    <Modal onClose={props.onClose}>
      <p className={classes.title}>Enter your details</p>
      <RegisterForm onClose={props.onClose} onAddData={addDataHandler} />
    </Modal>
  );
};

export default Register;
