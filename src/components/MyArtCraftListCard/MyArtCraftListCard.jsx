import PropTypes from "prop-types";
import { TiStarFullOutline } from "react-icons/ti";

const MyArtCraftListCard = ({ myArtCraft }) => {
  const { _id, imageURL, name, price, rating, customization, stockStatus } = myArtCraft;
  return (
    <div className="p-4 rounded flex flex-col justify-between" style={{ boxShadow: "0 0 10px 10px #a1a1a121" }}>
      <div>
        <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
          <img className="size-full object-cover rounded" src={imageURL} alt={name} />
        </div>
      </div>

      <h1 className="font-bold text-2xl mt-4">{name}</h1>

      <ul className="mt-1">
        <li>
          <span className="font-semibold text-lg">Customization:</span> {customization}
        </li>
        <li>
          <span className="font-semibold text-lg">Stock Status:</span> {stockStatus}
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

      <div className="flex gap-4">
        <button className="flex-1 btn text-base mt-4 text-white bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 border-none rounded">Update</button>
        <button className="flex-1 btn btn-error text-base mt-4 text-white border-none rounded">Delete</button>
      </div>
    </div>
  );
};

MyArtCraftListCard.propTypes = {
  myArtCraft: PropTypes.object,
};

export default MyArtCraftListCard;
