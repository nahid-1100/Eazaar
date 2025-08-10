import { Outlet } from "react-router";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="mt-[200px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
