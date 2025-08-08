import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./card";
import useProducts from "../../../../hooks/useProducts";
import TabCategory from "./TabCategory";
const TopCategory = () => {
  const { products, isLoading } = useProducts();
  if (isLoading) {
    return;
  }
  // TODO: change filter brand to category
  const projector = products.filter((item) => item.brand === "FitLife");
  const light = products.filter((item) => item.brand === "NovaCore");
  const laptop = products.filter((item) => item.brand === "TechNova");
  const headphone = products.filter((item) => item.brand === "ElectroMax");
  const googleGlass = products.filter((item) => item.brand === "EcoPlus");
  // console.log(projector);
  return (
    <section className="section">
      <div>
        <Tabs>
          <TabList className="">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold">
                Top Categories This Week
              </div>

              <div>
                <Tab>Projector</Tab>
                <Tab>Light</Tab>
                <Tab>Laptop</Tab>
                <Tab>Headphone</Tab>
                <Tab>Google Glass</Tab>
              </div>
            </div>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              <TabCategory items={projector}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              <TabCategory items={light}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              <TabCategory items={laptop}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              <TabCategory items={headphone}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4">
              <TabCategory items={googleGlass}></TabCategory>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="divider"></div>
      {/* products cards */}
    </section>
  );
};

export default TopCategory;
