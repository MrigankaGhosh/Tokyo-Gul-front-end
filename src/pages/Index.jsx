import { useState } from "react";
import HeaderUniversal from "../components/Layout/HeaderUniversal";
import MealsSummary from "../components/Meals/MealsSummary";
import Register from "../components/User/Register/Register";
import UserOption from "../components/User/UserOption";

const Index = () => {
  const [showRegister, setShowRegister] = useState(false);

  const showRegisterHandler = () => {
    setShowRegister(true);
  };

  const hideRegisterHandler = () => {
    setShowRegister(false);
  };
  return (
    <>
      {showRegister && <Register onClose={hideRegisterHandler} />}
      <HeaderUniversal />
      <MealsSummary />
      <UserOption showRegister={showRegisterHandler}/>
    </>
  );
};

export default Index;
