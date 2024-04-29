import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import loadingAnimation from "../../animations/loading.json";
import MyArtCraftListCard from "../../components/MyArtCraftListCard/MyArtCraftListCard";
import useAuth from "../../hooks/useAuth";

const MyArtCraftList = () => {
  const { user } = useAuth();
  const [myArtCraftList, setMyArtCraftList] = useState([]);
  const [loader, setLoader] = useState(true);

  const getCraftList = () => {
    setLoader(true);
    fetch(`http://localhost:5000/my-art-&-craft-list/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArtCraftList(data);
        setLoader(false);
      });
  };

  useEffect(() => {
    getCraftList();
  }, []);

  const handleFilter = (status) => {
    setLoader(true);
    fetch(`http://localhost:5000/my-art-&-craft-list/${user.email}/${status}`)
      .then((res) => res.json())
      .then((data) => {
        setMyArtCraftList(data);
        setLoader(false);
      });
  };

  return (
    <div className="max-w-[1440px] w-11/12 py-20 mx-auto">
      <div className="text-center">
        <h2 className="font-bold font-serif text-3xl">My Art & Craft List</h2>
      </div>

      <div className="w-fit mx-auto mt-6">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-base text-white bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 border-none rounded m-1">
            Customization
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => handleFilter("Yes")}>Yes</button>
            </li>
            <li>
              <button onClick={() => handleFilter("No")}>No</button>
            </li>
          </ul>
        </div>
      </div>

      {loader ? (
        <div className="flex flex-col mt-20 justify-center items-center">
          <Lottie className="size-36" animationData={loadingAnimation} />
        </div>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {myArtCraftList.map((myArtCraft) => (
            <MyArtCraftListCard key={myArtCraft._id} myArtCraft={myArtCraft} getCraftList={getCraftList}></MyArtCraftListCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtCraftList;
