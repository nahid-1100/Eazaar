import banner1 from "../../../../assets/Home/offer/offer_banner_21-1-1-1.jpg";
import banner2 from "../../../../assets/Home/offer/offer_banner_31-1-1-1.png";
import banner3 from "../../../../assets/Home/offer/offer_banner_41-1-1-1.jpg";
const OfferBanner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 section gap-6">
      <div>
        <img src={banner1} alt="" />
      </div>
      <div>
        <img src={banner2} alt="" />
      </div>
      <div>
        <img src={banner3} alt="" />
      </div>
    </section>
  );
};

export default OfferBanner;
