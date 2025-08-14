import { Outlet } from "react-router";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="container mx-auto px-4 md:px-20">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
