import BillDetails from "../components/Bill/BillDetails";
import HeaderUniversal from "../components/Layout/HeaderUniversal";
import MealsSummary from "../components/Meals/MealsSummary";

const Bill = () => {
  return (
    <>
      <HeaderUniversal />
      <MealsSummary />
      <BillDetails />
    </>
  );
};

export default Bill;
