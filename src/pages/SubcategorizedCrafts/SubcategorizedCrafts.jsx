import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loadingAnimation from "../../animations/loading.json";
import SubcategorizedCraftsCard from "../../components/SubcategorizedCraftsCard/SubcategorizedCraftsCard";

const SubcategorizedCrafts = () => {
  const { subcategory_name } = useParams();
  const [subcategorizedCrafts, setSubcategorizedCrafts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch(`https://artistry-studio-server.vercel.app/subcategories/${subcategory_name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSubcategorizedCrafts(data);
        setLoader(false);
      });
  }, []);
  return (
    <div className="max-w-[1440px] w-11/12 mx-auto py-20">
      <div className="mb-14 text-center">
        <h2 className="font-bold font-serif text-5xl">{subcategory_name} Items</h2>
      </div>
      {loader ? (
        <div className="flex flex-col justify-center items-center">
          <Lottie className="size-36" animationData={loadingAnimation} />
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {subcategorizedCrafts.map((subcategorizedCraft) => (
            <SubcategorizedCraftsCard key={subcategorizedCraft._id} subcategorizedCraft={subcategorizedCraft}></SubcategorizedCraftsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubcategorizedCrafts;
