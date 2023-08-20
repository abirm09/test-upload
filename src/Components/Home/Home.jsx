import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
