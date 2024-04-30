import PropTypes from "prop-types";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const SubcategorizedCraftsCard = ({ subcategorizedCraft }) => {
  const { _id, imageURL, name, subcategory_name, short_description, price, rating, processing_time } = subcategorizedCraft;
  return (
    <div className="bg-[#a1a1a121] shadow-lg rounded flex flex-col justify-between px-4 pt-4">
      <div>
        <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
          <img className="size-full object-cover rounded" src={imageURL} alt={name} />
        </div>
      </div>

      <h1 className="font-bold text-2xl mt-4">{name}</h1>

      <div className="flex items-center gap-2 py-1">
        <p>{short_description}</p>
      </div>

      <ul className="mt-1">
        <li>
          <span className="font-semibold text-lg">Subcategory name:</span> {subcategory_name}
        </li>
        <li>
          <span className="font-semibold text-lg">Processing time:</span> {processing_time}
        </li>
      </ul>

      <div className="flex justify-between items-center gap-2 flex-wrap mt-2">
        <h6 className="text-2xl text-[#9e793d] font-semibold">${price}</h6>

        <div className="flex items-center gap-2 py-1">
          <p className="flex items-center gap-1 text-lg font-medium">
            <TiStarFullOutline className="text-xl" />
            <span>{rating}</span>
          </p>
        </div>
      </div>

      <Link to={`/craft-items/${_id}`} className="btn text-base mx-0 my-4 text-white bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 border-none rounded">
        View Details
      </Link>
    </div>
  );
};

SubcategorizedCraftsCard.propTypes = {
  subcategorizedCraft: PropTypes.object,
};

export default SubcategorizedCraftsCard;
