import image from "../../../../assets/Home/other/26-1.png";
const CategoriesCard = ({ item }) => {
  const { name, price } = item;
  return (
    <div className="">
      <img src={image} alt="" />
      <div className="text-center font-bold">
        <p className="mb-2">{name}</p>
        <p className="text-skydeep">${price}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
