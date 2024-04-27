import { BiSolidCategoryAlt } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const CraftItemsCard = () => {
  return (
    <div className="bg-[#a1a1a121] dark:bg-[#222222] shadow-lg rounded-3xl flex flex-col justify-between">
      <div className="relative">
        <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
          <img
            className="size-full object-cover rounded-2xl"
            src="https://img.freepik.com/free-photo/8-bit-graphics-pixels-scene-with-nature_23-2151120961.jpg?t=st=1714252243~exp=1714255843~hmac=6f5d520ddaef587c6ce415cdd82d3f17d04348b94279cb58cb693e6fdf10a9dd&w=1060"
          />
        </div>
        <p className="absolute flex items-center gap-1 left-4 bottom-4 bg-[#B59460] px-5 py-2 rounded-xl text-lg text-white font-medium">
          <TiStarFullOutline className="text-xl" />
          <span>4.5</span>
        </p>
      </div>

      <h1 className="font-bold text-2xl mt-4 px-4">Forest Landscape Painting</h1>

      <div className="flex items-center gap-2 py-1 px-4">
        <p>Captures the beauty and tranquility of a forest scene, inviting viewers to immerse themselves in the lush greenery and peaceful ambiance.</p>
      </div>

      <div className="flex justify-between items-center gap-2 flex-wrap mt-4 px-4">
        <h6 className="text-2xl text-[#9e793d] dark:text-[#e2b266] font-semibold">${"1200"}</h6>
        <div title="Subcategory name" className="flex items-center gap-2 py-1">
          <BiSolidCategoryAlt className="text-xl" />
          <p>Landscape Painting</p>
        </div>
      </div>

      <Link className="btn text-base m-4 text-white bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 border-none rounded-2xl">View Details</Link>
    </div>
  );
};

export default CraftItemsCard;
