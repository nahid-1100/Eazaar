import { Outlet } from "react-router";
import Navbar from "../../component/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>footer</div>
    </div>
  );
};

export default RootLayout;
