import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import loadingAnimation from "../../animations/loading.json";
import CraftItemsCard from "../CraftItemsCard/CraftItemsCard";

const CraftItems = () => {
  const [craftItems, setCraftItems] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/craft-items")
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="py-20 dark:text-white">
      <div className="mb-14 text-center">
        <h2 className="font-bold font-serif text-5xl">Craft items</h2>
      </div>
      {loader ? (
        <div className="flex flex-col justify-center items-center">
          <Lottie className="size-36" animationData={loadingAnimation} />
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {craftItems.slice(0, 6).map((craftItem) => (
            <CraftItemsCard key={craftItem._id} craftItem={craftItem}></CraftItemsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CraftItems;
