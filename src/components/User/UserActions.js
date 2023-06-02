import { Link } from "react-router-dom";
import classes from "./UserActions.module.css";

const UserActions = (props) => {
  return (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.showRegister}>
        Register
      </button>
      <Link to="menu">
        <button className={classes.button}>Show Menu</button>
      </Link>
    </div>
  );
};

export default UserActions;
