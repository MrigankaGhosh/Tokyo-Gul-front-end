import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./BillDetails.module.css";

const BillDetails = () => {
  const [DUMMY_Bill, setBill] = useState({});

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch("http://localhost:8091/bill");
      const responseData = await response.json();

      console.log(responseData);

      console.log(responseData.name);

      setBill(responseData);
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
