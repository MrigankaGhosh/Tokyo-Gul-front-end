import { useEffect } from "react";
import Card from "../UI/Card";
import classes from "./BillDetails.module.css";

/*
const DUMMY_Bill = {
  name: "Mriganka",
  phoneNumber: "1234567890",
  email: "ghosh@gmail.com",
  finalBill: "14.40",
  discount: "5.00",
  taxDeduction: "2.40",
};
*/
let DUMMY_Bill;

const BillDetails = () => {
  //const [DUMMY_Bill, setBill] = useState();

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch("http://localhost:8090/bill");
      const responseData = await response.json();

      console.log(responseData);

      //const { name, phoneNumber, email, finalBill, discount, taxDeduction } =
       // responseData;

      //console.log(name + "...........");
      console.log(".........." + responseData.email);

      DUMMY_Bill = {
        name: responseData.name,
        phoneNumber: responseData.phoneNumber,
        email: responseData.email,
        finalBill: responseData.finalBill,
        discount: responseData.discount,
        taxDeduction: responseData.taxDeduction,
      };

      //setBill(responseData);
    };

    fetchMeal();
  }, []);

  const displayBill = (
    <ul>
      <li>
        <h3>{DUMMY_Bill.name}</h3>
        <div>
          <p>Email: {DUMMY_Bill.email}</p>
          <p>Phone Number: {DUMMY_Bill.phoneNumber}</p>
        </div>
      </li>
      <li>
        <table>
          <tbody>
            <tr>
              <th>Discout</th>
              <td>Rs. {DUMMY_Bill.discount}</td>
            </tr>
            <tr>
              <th>Tax Deduction</th>
              <td>Rs. {DUMMY_Bill.taxDeduction}</td>
            </tr>
            <tr>
              <th>Total Bill</th>
              <td>Rs. {DUMMY_Bill.finalBill}</td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  );

  return (
    <section className={classes.content}>
      <Card>{displayBill}</Card>
    </section>
  );
};

export default BillDetails;
