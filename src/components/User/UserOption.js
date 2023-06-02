import Card from "../UI/Card";
import UserSummary from "./UserSummary";
import classes from "./UserOption.module.css";
import UserActions from "./UserActions";

const UserOption = (props) => {
  return (
    <section className={classes.content}>
      <Card>
        <ul>
            <li>
                <UserSummary />
            </li>
          <li>
            <UserActions showRegister={props.showRegister}/>
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default UserOption;
