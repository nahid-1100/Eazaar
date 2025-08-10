import React from "react";
import useProducts from "../../../../hooks/useProducts";
import EasyCard from "./EasyCard";
import bgIMage from "../../../../assets/Home/offer/gadget-feature-bg-1.jpg";

const EasyLife = () => {
  const { products } = useProducts();
  return (
    <div
      className="p-20"
      style={{
        backgroundImage: `url(${bgIMage})`,
        backgroundPosition: "top",
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "center",
      }}
    >
      <div className="w-10/12">
        <div className="flex items-center justify-between py-14">
          <h3 className="text-3xl font-bold">Gadget Makes Your Life Easy</h3>
          <button className="btn bg-green text-white rounded-full font-bold ">
            View Full Collection
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {products.slice(0, 4).map((product) => (
            <EasyCard key={product._id} product={product}></EasyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EasyLife;
