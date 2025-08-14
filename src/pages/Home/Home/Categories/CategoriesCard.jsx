import { Link } from "react-router";
import image from "../../../../assets/Home/other/26-1.png";
const CategoriesCard = ({ item }) => {
  const { name, price, _id } = item;
  return (
    <Link to={`/details/${_id}`}>
      <div className="">
        <img src={image} alt="" />
        <div className="text-center font-bold">
          <p className="mb-2">{name}</p>
          <p className="text-skydeep">${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;
