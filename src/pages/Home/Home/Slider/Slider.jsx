// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// image import
import bannerCampaign from "../../../../assets/Home/slider/banner-campaign-51-1-1.png";
import bannerCampaign2 from "../../../../assets/Home/slider/banner-campaign-61-1.jpg";
// import required modules
import { Pagination } from "swiper/modules";
const Slider = () => {
  return (
    <section className="grid grid-cols-6 gap-6 mt-10">
      <div className="border-2 border-amber-600 col-span-4 ">
        {/* TODO: slider */}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
      {/* TODO: slider cover */}
      <div className="col-span-2 flex flex-col gap-8 mt-4">
        <div className="border-2 border-amber-600">
          <img src={bannerCampaign} alt="bannerCampaign" />
        </div>
        <div className="border-2 border-amber-600">
          <img src={bannerCampaign2} alt="bannerCampaign2" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
