import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import loadingAnimation from "../../animations/loading.json";
import MyArtCraftListCard from "../../components/MyArtCraftListCard/MyArtCraftListCard";
import useAuth from "../../hooks/useAuth";

const MyArtCraftList = () => {
  const { user } = useAuth();
  const [myArtCraftList, setMyArtCraftList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/my-art-&-craft-list/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArtCraftList(data);
        setLoader(false);
      });
  }, []);

  return (
    <div className="max-w-[1440px] w-11/12 py-20 mx-auto">
      <div className="text-center">
        <h2 className="font-bold font-serif text-3xl">My Art & Craft List</h2>
      </div>

      {loader ? (
        <div className="flex flex-col justify-center items-center">
          <Lottie className="size-36" animationData={loadingAnimation} />
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {myArtCraftList.map((myArtCraft) => (
            <MyArtCraftListCard key={myArtCraft._id} myArtCraft={myArtCraft}></MyArtCraftListCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtCraftList;
