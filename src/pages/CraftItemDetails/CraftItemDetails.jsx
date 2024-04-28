import { FaStar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const CraftItemDetails = () => {
  const { imageURL, name, subcategory_name, short_description, price, rating, customization, processing_time, stockStatus, user_email, user_name } =
    useLoaderData();
  return (
    <div className="bg-[#F3F3F3] py-10">
      <div className="flex flex-col lg:flex-row gap-10 max-w-[1440px] w-11/12 mx-auto">
        <div className="w-full lg:w-[52%] xl:flex-1">
          <img className="rounded size-full object-cover" src={imageURL} alt={name} />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="text-2xl mt-2 font-medium">${price}</p>

          <div className="flex gap-1 items-center mt-2">
            <FaStar className="text-xl" />
            <p className="text-xl font-medium">{rating}</p>
          </div>

          <p className="max-w-[31rem] my-6 text-lg">{short_description}</p>

          <div>
            <h4 className="text-xl underline font-semibold">Other details:</h4>
            <ul className="mt-1">
              <li>
                <span className="font-semibold text-lg">Subcategory:</span> {subcategory_name}
              </li>
              <li>
                <span className="font-semibold text-lg">Processing time:</span> {processing_time}
              </li>
              <li>
                <span className="font-semibold text-lg">Customization:</span> {customization}
              </li>
              <li>
                <span className="font-semibold text-lg">Stock Status:</span> {stockStatus}
              </li>
            </ul>
          </div>

          <div className="mt-3">
            <h4 className="text-xl underline font-semibold">Author details:</h4>
            <ul className="mt-1">
              <li>
                <span className="font-semibold text-lg">User email:</span> {user_email || "Not found"}
              </li>
              <li>
                <span className="font-semibold text-lg">User name:</span> {user_name}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItemDetails;
