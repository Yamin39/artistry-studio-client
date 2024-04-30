import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadingAnimation from "../../animations/loading.json";
import ArtCraftCategoriesCard from "../ArtCraftCategoriesCard/ArtCraftCategoriesCard";

const ArtCraftCategories = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://artistry-studio-server.vercel.app/subcategories")
      .then((res) => res.json())
      .then((data) => {
        setSubcategories(data);
        console.log(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="py-20 dark:text-white">
      <div className="mb-14 text-center">
        <h2 className="font-bold font-serif text-5xl">Art & Craft Categories</h2>
      </div>
      {loader ? (
        <div className="flex flex-col justify-center items-center">
          <Lottie className="size-36" animationData={loadingAnimation} />
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((subcategory) => (
            <Link to={`/subcategories/${subcategory.subcategory_name}`} key={subcategory._id}>
              <ArtCraftCategoriesCard subcategory={subcategory}></ArtCraftCategoriesCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtCraftCategories;
