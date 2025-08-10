import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../../hooks/useProducts";
import TabCategory from "../TopCategory/TabCategory";

const FeatureProduct = () => {
  const { products, isLoading } = useProducts();
  // TODO: change filter brand to category
  const projector = products.filter((item) => item.brand === "FitLife");
  const light = products.filter((item) => item.brand === "NovaCore");
  const laptop = products.filter((item) => item.brand === "TechNova");
  if (isLoading) {
    return;
  }
  return (
    <section className="section">
      <div>
        <Tabs>
          <TabList className="">
            <div className="flex justify-between items-center">
              <div>
                <Tab>Projector</Tab>
                <Tab>Light</Tab>
                <Tab>Laptop</Tab>
              </div>
            </div>
          </TabList>
          <div className="divider"></div>

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
        </Tabs>
      </div>
      {/* products cards */}
    </section>
  );
};

export default FeatureProduct;
