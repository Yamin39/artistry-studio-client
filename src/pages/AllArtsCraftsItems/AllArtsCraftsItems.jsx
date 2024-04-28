import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadingAnimation from "../../animations/loading.json";

const AllArtsCraftsItems = () => {
  const [allArtsCraftsItems, setAllArtsCraftsItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/craft-items")
      .then((res) => res.json())
      .then((data) => {
        setAllArtsCraftsItems(data);
        setLoader(false);
      });
  }, []);
  return (
    <div className="max-w-[1440px] w-11/12 py-20 mx-auto">
      <div className="text-center">
        <h2 className="font-bold font-serif text-3xl">All Art & Craft Items</h2>
      </div>

      {loader ? (
        <div className="flex flex-col justify-center items-center">
          <Lottie className="size-36" animationData={loadingAnimation} />
        </div>
      ) : (
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table-xs sm:table-md md:table-lg lg:table table-zebra">
              <thead>
                <tr className="text-left text-xs sm:text-base">
                  <th></th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Subcategory</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {allArtsCraftsItems.map((artsCraftsItem, i) => (
                  <tr key={artsCraftsItem._id} className="text-xs sm:text-base">
                    <th>{i + 1}</th>
                    <td>{artsCraftsItem.name}</td>
                    <td>${artsCraftsItem.price}</td>
                    <td>{artsCraftsItem.rating}</td>
                    <td>{artsCraftsItem.subcategory_name}</td>
                    <td>
                      <Link
                        to={`/craft-items/${artsCraftsItem._id}`}
                        className="btn h-auto min-h-0 bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 px-2 md:px-5 py-2 md:py-3 rounded text-xs sm:text-sm font-medium text-white"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllArtsCraftsItems;
