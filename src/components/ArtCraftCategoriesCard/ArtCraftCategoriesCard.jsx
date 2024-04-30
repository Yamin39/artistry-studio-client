import PropTypes from "prop-types";

const ArtCraftCategoriesCard = ({ subcategory }) => {
  const { imageURL, subcategory_name, subcategory_description } = subcategory;

  return (
    <div className="dark:bg-[#a1a1a121] p-4 rounded flex flex-col justify-between" style={{ boxShadow: "0 0 10px 10px #a1a1a121" }}>
      <div>
        <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
          <img className="size-full object-cover rounded" src={imageURL} alt={subcategory_name} />
        </div>
      </div>

      <h1 className="font-bold text-2xl mt-4">{subcategory_name}</h1>

      <div className="py-1">
        <p>{subcategory_description}</p>
      </div>
    </div>
  );
};

ArtCraftCategoriesCard.propTypes = {
  subcategory: PropTypes.object,
};

export default ArtCraftCategoriesCard;
