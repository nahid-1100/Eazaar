import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className=" h-screen bg-cyan-100 mb-96">
      <div className="w-full h-2/12">top header Dashboard</div>
      <div className="grid grid-cols-12">
        <div className="col-span-2  h-screen">
          <Dashboard></Dashboard>
        </div>
        <div className="col-span-10  h-screen">
          <Outlet></Outlet>
        </div>
      </div>
      <div>footer dashboard</div>
    </div>
  );
};

export default DashboardLayout;
