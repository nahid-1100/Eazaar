import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useProducts from "../../../../hooks/useProducts";
import TabCategory from "../TopCategory/TabCategory";
const TopCategory = () => {
  const { products, isLoading } = useProducts();
  if (isLoading) {
    return;
  }
  // TODO: change filter brand to category
  const projector = products.filter((item) => item.brand === "ElectroMax");
  const light = products.filter((item) => item.brand === "NovaCore");
  const laptop = products.filter((item) => item.brand === "TechNova");
  // console.log(projector);
  return (
    <section className="section">
      <div>
        <Tabs>
          <TabList className="">
            <div className="">
              <div>
                <Tab>Featured Products</Tab>
                <Tab>Trending Products</Tab>
                <Tab>Hot Sale</Tab>
              </div>
            </div>
          </TabList>
          <div className="divider"></div>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={projector}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={light}></TabCategory>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabCategory items={laptop}></TabCategory>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* products cards */}
    </section>
  );
};

export default TopCategory;
