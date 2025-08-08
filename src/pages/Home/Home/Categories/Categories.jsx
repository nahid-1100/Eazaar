import useProducts from "../../../../hooks/useProducts";
import CategoriesCard from "./CategoriesCard";
const Categories = ({ name, image, bgImg, cate }) => {
  const { products } = useProducts();
  //   ! TODO: change color to category
  const men = products.filter((product) => product.color === "Green");
  const phone = products.filter((product) => product.color === "Red");
  return (
    <section className="grid grid-cols-12 h-[595px] border-1 border-gray-200 section">
      {/* TODO: men clothing img and category add leater */}
      <div
        className="bg-pink-400 col-span-2"
        style={{
          backgroundImage: `url(${bgImg})`,
          ackgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "darken",
          opacity: "50%",
        }}
      >
        <div className="z-20">{name}</div>
      </div>
      <div className=" col-span-3 border-r-2 border-gray-200">
        <img src={image} alt="" className="" />
      </div>
      <div className="col-span-7">
        <div className="grid grid-cols-4 gap-6">
          {cate === "men" &&
            men
              .slice(0, 8)
              .map((item) => (
                <CategoriesCard key={item._id} item={item}></CategoriesCard>
              ))}
          {cate === "phone" &&
            phone
              .slice(0, 8)
              .map((item) => (
                <CategoriesCard key={item._id} item={item}></CategoriesCard>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
