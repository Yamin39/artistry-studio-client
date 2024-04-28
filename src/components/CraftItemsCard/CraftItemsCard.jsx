import PropTypes from "prop-types";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const CraftItemsCard = ({ craftItem }) => {
  const { _id, imageURL, name, subcategory_name, short_description, price, rating } = craftItem;
  return (
    <div className="bg-[#a1a1a121] dark:bg-[#222222] shadow-lg rounded-3xl flex flex-col justify-between">
      <div className="relative">
        <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
          <img className="size-full object-cover rounded-2xl" src={imageURL} alt={name} />
        </div>
        <p className="absolute flex items-center gap-1 left-4 bottom-4 bg-[#B59460] px-5 py-2 rounded-xl text-lg text-white font-medium">
          <TiStarFullOutline className="text-xl" />
          <span>{rating}</span>
        </p>
      </div>

      <h1 className="font-bold text-2xl mt-4 px-4">{name}</h1>

      <div className="flex items-center gap-2 py-1 px-4">
        <p>{short_description}</p>
      </div>

      <div className="flex justify-between items-center gap-2 flex-wrap mt-4 px-4">
        <h6 className="text-2xl text-[#9e793d] dark:text-[#e2b266] font-semibold">${price}</h6>
        <div title="Subcategory name" className="flex items-center gap-2 py-1">
          <BiSolidCategoryAlt className="text-xl" />
          <p>{subcategory_name}</p>
        </div>
      </div>

      <Link to={`/craft-items/${_id}`} className="btn text-base m-4 text-white bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 border-none rounded-2xl">
        View Details
      </Link>
    </div>
  );
};

CraftItemsCard.propTypes = {
  craftItem: PropTypes.object,
};

export default CraftItemsCard;
