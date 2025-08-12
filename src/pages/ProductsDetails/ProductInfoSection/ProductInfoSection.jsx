import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../../../assets/Home/slider/banner-campaign-51-1-1.png";

const ProductInfoSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
      <div>
        <Carousel
          showArrows={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
          <div>
            <img src={image} />
          </div>
        </Carousel>
      </div>
      <div className="w-5/6">
        <h3 className="text-2xl font-semibold mb-2 ">Holy Stone Drone</h3>
        <p className="mb-2">
          Categories: <span className="text-skydeep ">Projector</span>
        </p>
        <p className="mb-2 text-black opacity-50">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo
        </p>
        <p className="mb-2">
          <span className="">
            <del className="text-gray">$720.00</del>
            <br />
            <span className="text-xl text-skydeep font-bold"> $540.00</span>
          </span>
        </p>
        <p className="text-main mb-2">11 in stock</p>
        <button className="btn bg-main text-white px-8 bordrno">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfoSection;
